import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { SelectComponent } from "../select/select.component";
import { DatePickerComponent } from "../date-picker/date-picker.component";
import { RadiobuttonComponent } from "../radiobutton/radiobutton.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { FormFields } from '../../model/form-fields';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DatePickerComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  componentRef: any;

  @Input() field: FormFields;
  @Input() group: FormGroup;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
		const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
		this.componentRef = this.container.createComponent(factory);
		this.componentRef.instance.field = this.field;
		this.componentRef.instance.group = this.group;
  }

}
