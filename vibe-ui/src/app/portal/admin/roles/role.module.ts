import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from "./role.component";
import { RoleRoutingModule } from "./role-routing.module";
import { FormsModule } from "@angular/forms";
import { RoleResolve } from "./role.resolve";
import { AgGridModule } from "ag-grid-angular";
import { EditRoleModule } from "./edit/edit-role.module";
import { SharedModule } from "../../../shared/shared.module";
import { MaterialModule } from 'src/app/material.module';
import { AddRoleModule } from './add/add.role.module';
import { ListGridComponent } from 'src/app/shared/listGrid/listGrid.component';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    AgGridModule.withComponents([
      ListGridComponent
    ]),
    AddRoleModule,
    EditRoleModule
  ],
  declarations: [
    RoleComponent
  ],
  exports: [
    RoleComponent
  ],
  providers: [
    RoleResolve
  ]
})
export class RoleModule { }

