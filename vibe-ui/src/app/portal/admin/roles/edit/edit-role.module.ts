import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { EditRoleComponent } from "./edit-role.component";
import { EditRoleRoutingModule } from "./edit-role-routing.module";
import { RoleFormModule } from "../form/role-form.module";
import { SharedModule } from "../../../../shared/shared.module";
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    EditRoleRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    RoleFormModule
  ],
  declarations: [
    EditRoleComponent
  ],
  exports: [
    EditRoleComponent
  ],
  providers: [
  ]
})
export class EditRoleModule { }
