import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ApiHelper } from './core/service/api.helper.service';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgBusyModule} from 'ng-busy';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ContentModule,
    AppRoutingModule,
    RouterModule,
    LoginModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgBusyModule,
    FlexLayoutModule
  ],
  providers: [ ApiHelper ],
  bootstrap: [AppComponent]
})
export class AppModule { }
