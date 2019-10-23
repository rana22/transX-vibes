import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncryptionService } from './encryption.service';
import { StorageService } from './storage.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpService,
    EncryptionService,
    StorageService
  ]
})
export class ServiceModule { }
