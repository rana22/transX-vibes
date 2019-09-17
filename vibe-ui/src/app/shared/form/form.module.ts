import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { InputComponent } from './form-items/input/input.component';
import { ButtonComponent } from './form-items/button/button.component';
import { SelectComponent } from './form-items/select/select.component';
import { DatePickerComponent } from './form-items/date-picker/date-picker.component';
import { CheckboxComponent } from './form-items/checkbox/checkbox.component';
import { RadiobuttonComponent } from './form-items/radiobutton/radiobutton.component';
import { DynamicFieldDirective } from './form-items/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './form-items/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    FormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DatePickerComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    FormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DatePickerComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  entryComponents: [InputComponent,
    ButtonComponent,
    SelectComponent,
    DatePickerComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    DynamicFormComponent],
})
export class FormModule { }
