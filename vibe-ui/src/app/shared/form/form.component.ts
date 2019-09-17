import { DocumentDetails } from 'src/app/core/models/document';
import { FormFields } from './model/form-fields';
import { Component, ViewChild, OnInit} from "@angular/core";
import { Validators } from "@angular/forms";
import { DynamicFormComponent } from "./form-items/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  // styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public fields : FormFields[];
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor() { }

  ngOnInit() {
    // this.fields = [];
    // let field1 = new FormFields();
    // let field2 = new FormFields();
    // field1.key = 'Title';
    // field1.value = 'text';
    // field2.key = 'Description';
    // field2.value = 'text';
    // this.fields.push(field1);
    // this.fields.push(field2);
    
  }

  regConfig: FormFields[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
      value: "Male"
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: ["India", "UAE", "UK", "US"]
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: true
    },
    {
      type: "button",
      label: "Save"
    }
  ];
  
}
