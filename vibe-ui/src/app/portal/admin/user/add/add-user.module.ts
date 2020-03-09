import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UserFormModule } from "../form/user-form.module";
import { AddUserComponent } from "./add-user.component";
import { AddUserRoutingModule } from './add-user.routing.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    AddUserRoutingModule,
    FormsModule,
    MaterialModule,
    UserFormModule
  ],
  declarations: [
    AddUserComponent
  ],
  exports: [
    AddUserComponent
  ],
  providers: []
})
export class AddUserModule { }
