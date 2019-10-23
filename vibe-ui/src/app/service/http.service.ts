import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../core/models/user';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: 'http://localhost:3000/';

  constructor(private http : HttpClient, private encrpyt : EncryptionService) { }


  login(user){
    let pass = this.encrpyt.set('123456$#@$^@1ERF', user.password);
    return pass;
  }
}
