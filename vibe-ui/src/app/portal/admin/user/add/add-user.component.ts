import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Role } from 'src/app/core/models/role';
import { UserDAO } from 'src/app/core/service/dao/userDAO';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  model: any = {};
  userRoles:Role[] = [];

  constructor(
    private router: Router,
    private userDAO : UserDAO) {}

  ngOnInit() {}

  onSubmitted(userForm:any) {
    let user = userForm.user;
    let roles = userForm.roles;

    let ctrl = this;
    this.userDAO.createUser(user, roles).subscribe(
      result => {
        ctrl.router.navigate(['portal/admin/users']);
      },
      error => {
        console.error(error);
      }
    );
  }

  onCancelled() {
    this.router.navigate(['portal/admin/users']);
  }

}
