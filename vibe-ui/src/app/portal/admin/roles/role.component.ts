import { Component, OnInit } from '@angular/core';
import { ConstantMan } from 'src/app/core/service/constantMan';
import { Router } from '@angular/router';
import { RoleDAO } from 'src/app/core/service/dao/roleDAO';
import { ApiHelper } from 'src/app/core/service/services';
import { UserDAO } from 'src/app/core/service/dao/userDAO';
import { AdminAccess } from 'src/app/shared/auth/accessAdmin';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  public columnDefs;
  public rowData;
  public editPath;

  constructor(
    private router: Router,
    private roleDAO: RoleDAO,
    private userDAO: UserDAO,
    private apiHelper: ApiHelper,
    private checkAdmin: AdminAccess
  ) {

    this.columnDefs = this.createColumnDefs();
    this.rowData = this.createRowData();
    this.editPath = 'portal/admin/role/edit';

    this.checkAdmin.checkAdminAccess(this.userDAO, this.apiHelper, this.router);

    //Added in due to all roles having GET /roles automatically
    let roles = this.userDAO.getCurrentUser().roles;
    let roleIds: number[] = [];
    roles.forEach((role) => {
      roleIds.push(role.id);
    });

    if (!this.roleDAO.canAccessItem(roleIds, ConstantMan.API.RESOURCE.ROLE)) {
      let apiError = {status: 403, url: router.url};
      apiHelper.handleApiError(apiError);
    }
  }

  ngOnInit() {}

  private createColumnDefs() {
    return [
      {
        headerName: "Name",
        field: "type",
        filter: "text"
      },
      {
        headerName: "Admin Access",
        field: "adminAccess",
        filter: "text"
      }
    ];
  }

  private createRowData() {
    return this.roleDAO.get();
  }

}
