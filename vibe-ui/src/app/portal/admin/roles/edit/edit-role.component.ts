import { Component, OnInit } from '@angular/core';
import { ConstantMan } from 'src/app/core/service/constantMan';
import { Role } from 'src/app/core/models/role';
import { RoleDAO } from 'src/app/core/service/dao/roleDAO';
import { Router, ActivatedRoute } from '@angular/router';
import { Permission } from 'src/app/core/models/permission';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {

  public model: Role;
  public selectedId : any;
  public rolePermissions: Permission[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roleDAO: RoleDAO) {

  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.selectedId = +params['id'];
      this.model = this.roleDAO.getById(this.selectedId) as Role;
      this.rolePermissions = this.model["rolePermissionMap"];
    });

  }

  onSubmitted(roleForm: any) {
    let role = roleForm.role;
    let permissions = ConstantMan.DEFAULT_PERMISSIONS.concat(roleForm.permissions);

    let ctrl = this;
    this.roleDAO.updateRole(role, permissions).subscribe(
      result => {
        ctrl.router.navigate(['portal/admin/roles'])
      },
      error => {
        console.error(error);
      }
    );
  }

  onCancelled() {
    this.router.navigate(['portal/admin/roles']);
  }
}
