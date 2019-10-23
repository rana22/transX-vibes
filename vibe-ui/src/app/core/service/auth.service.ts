import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiHelper } from './api.helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSource = new Subject<boolean>();
  private loggedIn: boolean = false;

  loggedInStatusChange$ = this.loggedInSource.asObservable();

  constructor(private apiHelper:ApiHelper) { 
    
  }

  
}
