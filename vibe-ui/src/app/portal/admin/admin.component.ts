import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleDAO } from 'src/app/core/service/dao/roleDAO';
import { UserDAO } from 'src/app/core/service/dao/userDAO';
import { ApiHelper } from 'src/app/core/service/api.helper.service';
import { AdminAccess } from 'src/app/shared/auth/accessAdmin';
import { ConstantMan } from 'src/app/core/service/constantMan';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public accessRoles: boolean;
  public accessUsers: boolean;

  constructor(
    private router: Router,
    private roleDAO: RoleDAO,
    private userDAO: UserDAO,
    private apiHelper: ApiHelper,
    private checkAdmin: AdminAccess) {

    this.checkAdmin.checkAdminAccess(this.userDAO, this.apiHelper, this.router);
  }


  ngOnInit() {
    let roles = this.userDAO.getCurrentUser().roles;
    let roleIds: number[] = [];
    roles.forEach((role) => {
      roleIds.push(role.id);
    });

    this.accessRoles = this.roleDAO.canAccessItem(roleIds, ConstantMan.API.RESOURCE.ROLE);
    this.accessUsers = this.roleDAO.canAccessItem(roleIds, ConstantMan.API.RESOURCE.USER);
  }

}
