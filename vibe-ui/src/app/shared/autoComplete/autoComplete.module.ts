import { NgModule } from '@angular/core';
import {AutoCompleteComponent} from "./autoComplete.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    AutoCompleteComponent,
  ],
  declarations: [
    AutoCompleteComponent,
  ],
  providers: [
  ]
})
export class AutoCompleteModule { }
