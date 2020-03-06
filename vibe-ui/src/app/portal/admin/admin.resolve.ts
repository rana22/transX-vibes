import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { QueryResult } from 'breeze-client';
import { Observable, merge } from "rxjs";
import { AuthService } from 'src/app/core/service/services';
import { RoleDAO } from 'src/app/core/service/dao/roleDAO';
import { PermissionDAO } from 'src/app/core/service/dao/permissionDAO';

@Injectable()
export class AdminResolve implements Resolve<QueryResult> {
    // export class AdminResolve {
    constructor(
        private authService: AuthService,
        private roleDAO: RoleDAO,
        private permissionDAO: PermissionDAO
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        let sessionResolve = this.authService.checkSession();
        let roleResolve = this.roleDAO.load();
        let permissionResolve = this.permissionDAO.load();

        return merge(sessionResolve, roleResolve, permissionResolve);
    }
}

