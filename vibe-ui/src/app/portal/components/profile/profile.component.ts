import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { Router } from '@angular/router';
import { Role } from 'src/app/core/models/role';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

  public model: User;
  public currentUser: User;
  public userRoles: number[] = [];

  constructor( private router: Router) {
    // this.currentUser = this.userDAO.getCurrentUser();
  }

  ngOnInit() {
    let usr = new User();
    usr.email = "kbit.thapa@gmail.com";
    usr.username = "kthapa";
    this.model = usr;
    // this.model = this.currentUser;
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

}

