import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ApiHelper } from '../core/service/services';
import { FormConfig, FormField } from '../shared/form/model/form-fields';
import { Validators } from '@angular/forms';
import { FormStyleCofig } from '../shared/form/model/form.style.model';
import { HttpService } from '../service/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  title = 'client';
  isAuthenticated: boolean;

  formFieldConfig: FormConfig = new FormConfig();
  formStyle : FormStyleCofig = new FormStyleCofig();

  constructor(private apiHelper:ApiHelper,
               route: Router,
               private http: HttpService) {
  }

  ngOnInit() {
    var authSvc = this;
    this.formFieldConfig.formFields = this.regConfig;
    this.formFieldConfig.title = "Login";
    this.formStyle.width = "col-md-4 offset-md-4";
  }

  regConfig: FormField[] = [
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
      action: "submit",
      type: "button",
      label: "Login",
    },
    {
      action: "cancel",
      type: "button",
      label: "Cancel"
    }
  ];

  submit(value){
    this.http.login(value);

  }

}