import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constant } from './constant';
import { core } from 'breeze-client';

@Injectable({
  providedIn: 'root'
})
export class ApiHelper {

  private accessToken: any;
  private env: string;
  private serviceName: string;
  private resources: Map<string, string> = new Map();
  private busySource = new Subject<any>();
  private apiErrorSource = new Subject<any>();
  private clientId : string;
  private authUrl : string;

  busyChange$ = this.busySource.asObservable();
  apiErrorChange$ = this.apiErrorSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {

  }

  //config functions
  public setResources(name: string, resource: string) {
    this.resources.set(name, resource);
  }

  public setEnvironment(envArg: string) {
    this.env = envArg;
    switch (envArg) {
      case 'local':
        this.serviceName = Constant.API.BASE.LOCAL;
        break;
      case 'dev':
        this.serviceName = Constant.API.BASE.DEV;
        break;
      case 'prod':
        this.serviceName = Constant.API.BASE.PROD;
        break;
      default:
        this.serviceName = Constant.API.BASE.DEV;
        this.env = 'local';
    }
  }

  public getRelativePath(resName: string): string {
    return this.getFullPath(resName, true);
  }

  public getResPath(resName: string, relPath: boolean): string {
    return this.getFullPath(this.resources.get(resName), relPath);
  }

  public getServiceName(): string {
    return this.serviceName;
  }

  public getFullPath(res: string, relPath: boolean): string {
    let path: string;
    if (relPath) {
      path = res;
    } else {
      path = this.serviceName + res;
    }
    return path;
  }

  public getDefaultHeader(): Headers {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    if (!this.getAccessToken()) {
      return headers;
    }
    headers.set('Authorization', 'Bearer ' + this.getAccessToken());
    return headers;
  }

  public getParameters(addlParameters: any) {
    let defaultParams = {};
    return core.extend(defaultParams, addlParameters);
  }

  public apiCall(url: string, method: string, params: any, data: any, headers: HttpHeaders, resource?: string): Observable<any> {
    if (resource) {
      url = url + resource;
    }
    if (!data) {
      data = {};
    }

    let that = this;
    let reqOptions = { body: data, headers: headers, params: params};
    let observable = Observable.create(function subscribe(observer) {
    let httpRequest = that.http.request(method, url, reqOptions);
      httpRequest.subscribe(
        data => {
          let body = {};
          try {
            body = data;
          }
          catch (e) {
            console.log(e);
          }

          observer.next(body);
          observer.complete();
        },
        error => {
          that.handleApiError(error);
          observer.error(error);
        });
    }).share();

    this.setBusy(observable);

    return observable;
  }

  public handleApiError(apiError) {
    console.log(apiError);
    if (apiError.hasOwnProperty('status')) {
      switch (apiError.status) {
        case 401:
          console.log('Unauthorized');
          this.setApiError({
            title: "Unauthorized",
            message: "Please try logging in again."
          });
          // this.router.navigate(['/login']);
          break;
        case 403:
          console.log('Forbidden');
          if (apiError.url.includes('login')) {
            this.setApiError({
              title: "Login Failed",
              message: "The username / password combination was invalid."
            });
            // this.router.navigate(['/login']);
          } else if (apiError.url.includes('reset')) {
            this.setApiError({
              title: "Token Expired",
              message: "You cannot cannot reset your password at this time."
            });
            // this.router.navigate(['/login']);
          } else {
            this.setApiError({
              title: "Access Forbidden",
              message: "You do not currently have access to that resource."
            });
            this.router.navigate(['/portal']);
          }
          break;
        case 404:
          console.log("Not Found");
          this.setApiError({
            title: "404",
            message: "Page not found."
          });
          // this.router.navigate(['/login']);
          this.router.navigate(['/portal']);
          break;
        default:
          this.setApiError({
            title: apiError.status + " " + apiError.statusText,
            message: apiError._body
          });
      }
      this.router.navigate(['/portal']);
    } else {
      console.log('unhandled API error');
    }
  }

  public setAccessToken(token: string) {
    this.accessToken = token;
    window.localStorage.setItem('accessToken', token);

  }

  public removeAccessToken() {
    this.accessToken = null;
    window.localStorage.removeItem('accessToken');
  }

  public getAccessToken() {
    this.accessToken = window.localStorage.getItem('accessToken');
    return this.accessToken;
  }

  public setBusy(busy: Observable<any>) {
    this.busySource.next(busy);
  }

  public setApiError(apiError) {
    console.log(apiError);
    this.apiErrorSource.next(apiError);
  }

  public setOktaParam(url : string, id : string){
    this.authUrl = url;
    this.clientId = id;
  }

  public getOktaUrl(){
    return this.authUrl;
  }

  public getOktaId(){
    return this.clientId;
  }

}
