import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';
import { Router, NavigationStart } from '@angular/router';
import { ApiHelper } from '../core/service/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  title = 'client';
  isAuthenticated: boolean;

  widget = new OktaSignIn({
    baseUrl: '/api'
  });

  constructor(private apiHelper:ApiHelper,
               public oktaAuth: OktaAuthService, 
               route: Router) {

    route.events.forEach(event => {
      if (event instanceof NavigationStart) {
        switch(event.url) {
          case '/login':
          case '/calculator':
            break;
          default:
            this.widget.remove();
            break;
        }
      }
    })
  }

  ngOnInit() {
    var authSvc = this;
    this.widget.renderEl({
      el: '#okta-signin-container'},
      (res) => {
        alert(JSON.stringify(res))
        if (res.status === 'SUCCESS') {
          authSvc.apiHelper.setAccessToken(res.session.token);
          // var createdUser = authSvc.userDAO.createFromServer(user) as any;
          this.oktaAuth.loginRedirect('/home', { sessionToken: res.session.token });
          this.widget.hide();
        }
      },
      (err) => {
        console.warn(err);
        throw err;
      }
    );
  }
}