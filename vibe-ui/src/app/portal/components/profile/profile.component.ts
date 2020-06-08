import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { Router } from '@angular/router';
import { Role } from 'src/app/core/models/role';
import { FormConfig, FormField } from 'src/app/shared/form/model/form-fields';
import { FormStyleCofig } from 'src/app/shared/form/model/form.style.model';
import { Validators } from '@angular/forms';
import { UserDAO } from 'src/app/core/service/dao/userDAO';

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

  constructor(private userDAO: UserDAO, private router: Router) {
    this.currentUser = this.userDAO.getCurrentUser();
  }

  ngOnInit() {
    this.model = this.currentUser;
    console.log(this.model.username);
    this.formFieldConfig.formFields = this.getFormField(this.model);
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
    this.userDAO.updateUser(user, roles).subscribe(
      data => {
        ctrl.router.navigate(['portal']);
      },
      error => {
        console.error(error);
      }
    );
  }

  cancel() {
    this.router.navigate(['portal']);
  }

  private getFormField(model){
   let profileConfig : FormField[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      value: model.username,
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
      value: model.firstName,
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
      value: model.lastName,
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
      value: model.email,
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
   ]
   return profileConfig;
  }


  // profileConfig: FormField[] = [
  //   {
  //     type: "input",
  //     label: "Username",
  //     inputType: "text",
  //     name: "name",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Name Required"
  //       },
  //       {
  //         name: "pattern",
  //         validator: Validators.pattern("^[a-zA-Z]+$"),
  //         message: "Accept only text"
  //       }
  //     ]
  //   },
  //   {
  //     type: "input",
  //     label: "First Name",
  //     inputType: "text",
  //     name: "fname",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Name Required"
  //       },
  //       {
  //         name: "pattern",
  //         validator: Validators.pattern("^[a-zA-Z]+$"),
  //         message: "Accept only text"
  //       }
  //     ]
  //   },
  //   {
  //     type: "input",
  //     label: "Last Name",
  //     inputType: "text",
  //     name: "lname",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Name Required"
  //       },
  //       {
  //         name: "pattern",
  //         validator: Validators.pattern("^[a-zA-Z]+$"),
  //         message: "Accept only text"
  //       }
  //     ]
  //   },
  //   {
  //     type: "input",
  //     label: "Email",
  //     inputType: "text",
  //     name: "email",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Name Required"
  //       },
  //       {
  //         name: "pattern",
  //         validator: Validators.pattern("^[a-zA-Z]+$"),
  //         message: "Accept only text"
  //       }
  //     ]
  //   },
  //   {
  //     action: "submit",
  //     type: "button",
  //     label: "Save",
  //   },
  //   {
  //     action: "cancel",
  //     type: "button",
  //     label: "Cancel"
  //   }
  // ];

  submit(value: any){
    
  }
}

