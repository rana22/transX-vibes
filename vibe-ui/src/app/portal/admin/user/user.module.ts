import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UpdateComponent } from './update/update.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [UserComponent, UpdateComponent, FormComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
