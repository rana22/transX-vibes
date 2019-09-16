import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateModule } from './feature/navigate/navigation.module';
import { ContentModule } from './content/content.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ApiHelper } from './core/service/api.helper.service';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgBusyModule } from 'ng-busy';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OKTA_CONFIG, OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';

const oktaConfig = {
  issuer: environment.okta.url,
  clientId: environment.okta.clientId,
  redirectUri: 'http://localhost:4200/'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavigateModule,
    ContentModule,
    AppRoutingModule,
    RouterModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgBusyModule,
    FlexLayoutModule,
    OktaAuthModule,
    SharedModule
  ],
  providers: [
    ApiHelper,
    { provide: OKTA_CONFIG, useValue: oktaConfig },
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
