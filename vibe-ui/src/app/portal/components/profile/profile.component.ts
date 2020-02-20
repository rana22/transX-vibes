import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { Router } from '@angular/router';
import { Role } from 'src/app/core/models/role';
import { FormConfig, FormField } from 'src/app/shared/form/model/form-fields';
import { FormStyleCofig } from 'src/app/shared/form/model/form.style.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

  public model: User;
  public currentUser: User;
  public userRoles: number[] = [];

  title = 'client';
  isAuthenticated: boolean;

  formFieldConfig: FormConfig = new FormConfig();
  formStyle : FormStyleCofig = new FormStyleCofig();

  constructor( private router: Router) {
    // this.currentUser = this.userDAO.getCurrentUser();
  }

  ngOnInit() {
    let usr = new User();
    usr.email = "kbit.thapa@gmail.com";
    usr.username = "kthapa";
    this.model = usr;
    // this.model = this.currentUser;

    this.formFieldConfig.formFields = this.profileConfig;
    this.formFieldConfig.title = "Profile";
    this.formStyle.width = "col-md-6 offset-md-3";
  }

  updateProfile() {
    this.model.roles.forEach((role:Role, index:number) => {
      this.userRoles.push(role.id);
    });

    let user = this.model;
    let roles = this.userRoles;
    let ctrl = this;
    // this.userDAO.updateUser(user, roles).subscribe(
    //   data => {
    //     ctrl.router.navigate(['portal']);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }

  cancel() {
    this.router.navigate(['portal']);
  }



  profileConfig: FormField[] = [
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
      label: "First Name",
      inputType: "text",
      name: "fname",
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
      label: "Last Name",
      inputType: "text",
      name: "lname",
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
      label: "Email",
      inputType: "text",
      name: "email",
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
      action: "submit",
      type: "button",
      label: "Save",
    },
    {
      action: "cancel",
      type: "button",
      label: "Cancel"
    }
  ];
}

