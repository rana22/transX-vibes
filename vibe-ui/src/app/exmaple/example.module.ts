import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';

@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    TranslateModule,
    AngularMyDatePickerModule
  ]
})
export class ExampleModule { }
