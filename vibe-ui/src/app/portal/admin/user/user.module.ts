import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user-routing.module";
import { FormsModule } from "@angular/forms";
import {UserResolve} from "./user.resolve";
import {AgGridModule} from "ag-grid-angular";
import {AddUserModule} from "./add/add-user.module";
import {SharedModule} from "../../../shared/shared.module";
import {ListGridComponent} from "../../../shared/listGrid/listGrid.component";
import { MaterialModule } from 'src/app/material.module';
import { EditUserModule } from './edit/user-edit.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    AgGridModule.withComponents([
      ListGridComponent
    ]),
    AddUserModule,
    EditUserModule
  ],
  declarations: [
    UserComponent
  ],
  exports: [
    UserComponent
  ],
  providers: [
    UserResolve
  ]
})
export class UserModule { }

