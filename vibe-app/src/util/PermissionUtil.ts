import { injectable, inject } from "inversify";
import Http = require("passport-http");
import IAuthService = require("../service/IAuthService");
import IUserService = require("../service/IUserService");
import * as express from 'express';
import TYPES from "../config/properties/Types";
import PermissionService = require("../service/PermissionService");
import UserRoleService = require("../service/UserRolesService");
import IUserRoleService = require("../service/IUserRoleService");
import IPermissionService = require("../service/IPermissionService");
import { User } from "../model/User";
import { UserRoles } from "../model/UserRoles";

@injectable()
class PermissionUtil {

    @inject(TYPES.IPermissionService) private _permissionService: IPermissionService;
    @inject(TYPES.IUserRoleService) private _userRoleService : IUserRoleService;
    init() {

    }

    checkUserPermission(url,path,method, user): Promise<boolean>{
        // return this._userRoleService.findAllWithId(user).then( res =>{
        //     res = res as UserRoles[];
        //     return this.hasPermission(url,path,method, res);
        // })
        return new Promise((resolve) =>{
            return resolve(true);
        })
    }

    hasPermission(url,path,method, user): Promise<boolean>{
        let hasPermission = false;
        let roleIdArray = user.map(function (role) {
                return role.id;
        });
        return new Promise((resolve) => {
            this._permissionService.getDistinctPermissionsByRole([1]).then(function (permissionEntities) {
                hasPermission = permissionEntities.some(function (permission) {
                    return (permission.url == url && permission.method == method && permission.path == path);
                });
                resolve(hasPermission);
            });
        });
    }
}

Object.seal(PermissionUtil);
export = PermissionUtil;