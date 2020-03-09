import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Role } from 'src/app/core/models/role';
import { PermissionDAO } from 'src/app/core/service/dao/permissionDAO';
import { UserDAO } from 'src/app/core/service/dao/userDAO';
import { ApiHelper } from 'src/app/core/service/services';
import { Router } from '@angular/router';
import { AdminAccess } from 'src/app/shared/auth/accessAdmin';
import { ErrorDialogService } from 'src/app/shared/errorDialog/errorDialogService';

@Component({
  selector: 'tdk-role-form',
  templateUrl: './role-form.component.html'
})
export class RoleFormComponent implements OnInit {

  @Input()
  role: Role;

  @Input()
  rolePermissions: any[];

  @Output() onCancelled = new EventEmitter<boolean>();
  @Output() onSubmitted = new EventEmitter<any>();

  public model: Role;
  public permissionList: any[];

  constructor(
    private permissionDAO: PermissionDAO,
    private userDAO: UserDAO,
    private apiHelper: ApiHelper,
    private router: Router,
    private adminCheck: AdminAccess,
    private permissionDialog: ErrorDialogService) {

    this.adminCheck.checkAdminAccess(this.userDAO, this.apiHelper, this.router);
    this.permissionList = this.permissionDAO.getEditablePermissions() as any[];
    this.permissionList.forEach(function(permission) {
      permission.isChecked = false;
    });
  }

  ngOnInit() {
  }

}
