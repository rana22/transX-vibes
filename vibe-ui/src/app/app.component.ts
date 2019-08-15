import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { ApiHelper } from './core/service/api.helper.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService,
              private apiHelper : ApiHelper) {

      var self = this;
      this.apiHelper.setEnvironment(environment.envName);
      this.apiHelper.setOktaParam(environment.okta.url, environment.okta.clientId);
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => {
        this.isAuthenticated = isAuthenticated;
        console.log("Is user authenticated ==== ****** " + this.isAuthenticated)
      }
    );
  }
}