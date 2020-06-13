import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { QueryResult } from 'breeze-client';
import { Observable} from "rxjs";
import { AuthService } from '../core/service/services';
import { PermissionDAO } from '../core/service/dao/permissionDAO';
import { RoleDAO } from '../core/service/dao/roleDAO';
import { merge } from 'rxjs'

@Injectable()
export class PortalResolve implements Resolve<QueryResult> {
  constructor(
    private authService: AuthService,
    private roleDAO: RoleDAO,
    private permissionDAO: PermissionDAO
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    let sessionResolve = this.authService.checkSession();
    let roleResolve = this.roleDAO.load();
    let permissionResolve = this.permissionDAO.load();

    return merge(sessionResolve, roleResolve, permissionResolve);
  }
}
