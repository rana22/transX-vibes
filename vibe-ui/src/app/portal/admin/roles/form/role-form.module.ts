import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoleFormComponent } from "./role-form.component";
import { SharedModule } from "../../../../shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from 'src/app/material.module';
import { TextMaskModule } from 'angular2-text-mask';
import { AdminAccess } from 'src/app/shared/auth/accessAdmin';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    TextMaskModule,
    FlexLayoutModule
  ],
  declarations: [
    RoleFormComponent
  ],
  exports: [
    RoleFormComponent
  ],
  providers: [
    AdminAccess
  ]
})
export class RoleFormModule { }
