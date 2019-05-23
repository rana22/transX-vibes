import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Services from './service/services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    Services.ApiHelper,
    Services.AuthService
  ]
})
export class CoreModule { }
