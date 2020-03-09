import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {UserFormModule} from "../form/user-form.module";
import {SharedModule} from "../../../../shared/shared.module";
import { UserEditRoutingModule } from './user-edit.routing.module';
import { MaterialModule } from 'src/app/material.module';
import { EditUserComponent } from './user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UserEditRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    UserFormModule
  ],
  declarations: [
    EditUserComponent
  ],
  exports: [
    EditUserComponent
  ],
  providers: [
  ]
})
export class EditUserModule { }
