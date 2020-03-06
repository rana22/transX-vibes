import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [RoleComponent, AddComponent, UpdateComponent, FormComponent],
  imports: [
    CommonModule
  ]
})
export class RoleModule { }
