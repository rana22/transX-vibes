import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { User } from 'src/app/core/models/user';
import { Role } from 'src/app/core/models/role';
import { UserDAO } from 'src/app/core/service/dao/userDAO';
import { RoleDAO } from 'src/app/core/service/dao/roleDAO';


@Component({
  selector: 'app-edit-user',
  templateUrl: './user-edit.component.html',
})
export class EditUserComponent implements OnInit {

  public model: User;
  public selectedId: any;
  public userRoles: Role[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userDAO: UserDAO,
    private roleDAO: RoleDAO) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedId = +params['id'];
      this.model = this.userDAO.getById(this.selectedId) as User;
      this.userRoles = this.roleDAO.getAllRolesForUserId(this.selectedId);
    });

  }

  onSubmitted(userForm: any) {
    let user = userForm.user;
    let userRoles = userForm.roles;

    let ctrl = this;
    this.userDAO.updateUser(user, userRoles).subscribe(
      result => {
        ctrl.router.navigate(['portal/admin/users'])
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
