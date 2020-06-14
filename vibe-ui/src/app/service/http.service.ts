import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../core/models/user';
import { EncryptionService } from './encryption.service';
import { map, catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable, Subject, pipe } from 'rxjs';
import { ConstantMan } from '../core/constantMan';
import { ApiHelper } from '../core/service/api.helper.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: 'http://localhost:3000/';

  constructor(private apiHelper: ApiHelper, private http : HttpClient, private encrpyt : EncryptionService) { }


  login(user): Observable<HttpResponse<any>>{
    let url = 'http://localhost:3000/app/v1/login';
    // let pass = this.encrpyt.set('123456$#@$^@1ERF', user.password);
    let header: HttpHeaders = this.apiHelper.getDefaultHeader();

    let data = {
      grant_type: "password",
      username: user.username,
      password: user.password
    };
    return this.http.post(url, data, { headers: header, observe: 'response'})
      .pipe(
        map((res: any) => res),
        catchError((err: Response) => observableThrowError(err))
    );
  }
}
