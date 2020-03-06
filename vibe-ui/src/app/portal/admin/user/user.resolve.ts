import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { QueryResult } from 'breeze-client';
import { merge } from "rxjs";
import { UserDAO } from 'src/app/core/service/dao/userDAO';
import { RoleDAO } from 'src/app/core/service/dao/roleDAO';
import { AuthService } from 'src/app/core/service/services';
@Injectable()
export class UserResolve implements Resolve<QueryResult> {
  constructor(
    private userDAO: UserDAO,
    private roleDAO: RoleDAO,
    private authService: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    let userResolve = this.userDAO.load();
    let roleResolve = this.roleDAO.load();
    let sessionResolve = this.authService.checkSession();

    return merge(userResolve,roleResolve,sessionResolve);
  }
}
