import { DocumentDetails } from 'src/app/core/models/document';
import { FormField, FormConfig } from './model/form-fields';
import { Component, ViewChild, OnInit, Input} from "@angular/core";
import { Validators } from "@angular/forms";
import { DynamicFormComponent } from "./form-items/dynamic-form/dynamic-form.component";
import { FormStyleCofig } from './model/form.style.model';

@Component({
  selector: 'vibe-app-form',
  templateUrl: './form.component.html',
  // styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public fields : FormField[];

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  @Input("formFieldConfig") formFieldConfig : FormConfig;
  @Input("formStyle") formStyle : FormStyleCofig;

  constructor() { }

  ngOnInit() {

    
  }

  submit(event){
    console.log(event);
  }
  
}
