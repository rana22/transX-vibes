import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {ConstantMan} from "./constantMan";
import {Observable, Subject} from "rxjs";
import {UserDAO} from "./dao/userDAO";
import {User} from "../models/user";
import {RoleDAO} from "./dao/roleDAO";
import { ApiHelper } from './api.helper.service';

@Injectable()
export class AuthService {

    private loggedInSource = new Subject<boolean>();
    private loggedIn: boolean = false;

    loggedInStatusChange$ = this.loggedInSource.asObservable();

    constructor(private apiHelper:ApiHelper, private userDAO:UserDAO, private roleDAO:RoleDAO) {
      this.loggedInSource.next(false);
    }

    login(username: string, password: string): Observable<any> {
      let url = this.apiHelper.getServiceName() + ConstantMan.API.RESOURCE.LOGIN;
      let method = "POST";
      var header: HttpHeaders = this.apiHelper.getDefaultHeader();

      let data = {
            grant_type: "password",
            username: username,
            password: password
        };

      var authSvc = this;

      var httpRequest = this.apiHelper.apiCall(url,method, null, data,header,null);
      var observable = Observable.create(function subscribe(observer) {
        httpRequest.subscribe(
          data => {
            let user = data.user;
            let token = data.access_token;
            authSvc.apiHelper.setAccessToken(token);
            var createdUser = authSvc.userDAO.createFromServer(user) as any;
            createdUser.roles = authSvc.roleDAO.getAllRolesForUserId(createdUser.id);
            console.log(createdUser);
            authSvc.userDAO.setCurrentUser(createdUser);
            observer.next(data);
            observer.complete();
            authSvc.loggedIn = true;
            authSvc.loggedInSource.next(authSvc.loggedIn);
          },
          error => {
            observer.error(error);
          });
      });

      return observable;
    }

    logout(): Observable<any> {
      let url = this.apiHelper.getServiceName()+ "auth/" +ConstantMan.API.RESOURCE.LOGOUT;
      let method = "POST";
      var header: HttpHeaders = this.apiHelper.getDefaultHeader();

      let data = {};

      var authSvc = this;

      var httpRequest = this.apiHelper.apiCall(url,method, null, data,header,null);
      var observable = Observable.create(function subscribe(observer) {
        httpRequest.subscribe(
          data => {
            authSvc.apiHelper.setAccessToken(null);
            authSvc.apiHelper.removeAccessToken();
            observer.next(data);
            observer.complete();
            authSvc.loggedIn = false;
            authSvc.loggedInSource.next(authSvc.loggedIn);
          },
          error => {
            observer.error(error);
          });
      });
      return observable;
    }

    checkSession(): Observable<any> {
      console.log("check session !!");
      let url = this.apiHelper.getServiceName() + ConstantMan.API.RESOURCE.SESSION;
      let method = "GET";
      var header: HttpHeaders = this.apiHelper.getDefaultHeader();
      let data = {};
      let user =  this.userDAO.getCurrentUser();
      let id = user.id;
      let params = new HttpParams();
      var authSvc = this;

      var httpRequest = this.apiHelper.apiCall(url,method, params, data, header, null);
      var observable = Observable.create(function subscribe(observer) {
        httpRequest.subscribe(
          data => {
            observer.next(data);
            authSvc.userDAO.setCurrentUser(data as User);
            observer.complete();
            authSvc.loggedInSource.next(true);
          },
          error => {
            console.log("error !!");
            authSvc.apiHelper.setAccessToken(null);
            authSvc.apiHelper.removeAccessToken();
            authSvc.loggedInSource.next(false);
            observer.error(error);
          });
      });

      return observable;
    }

    isLoggedIn(): boolean {
      return this.loggedIn;
    }
}
