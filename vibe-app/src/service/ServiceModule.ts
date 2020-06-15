import {ContainerModule, interfaces} from "inversify";
import TYPES from "../config/properties/Types";
import IPersonService = require("./IPersonService");
import PersonService = require("./PersonService");
import IUserService = require("./IUserService");
// import UserService = require("./UserService");
import Bind = interfaces.Bind;
import { User } from "../model/User";
import UserService = require("./UserService");
import IPermissionService = require("./IPermissionService");
import PermissionService = require("./PermissionService");
import IAuthService = require("./IAuthService");
import AuthService = require("./AuthService");
import IRoleService = require("./IRoleService");
import RoleService = require("./RoleService");
import IUserRoleService = require("./IUserRoleService");
import { UserRoles } from "../model/UserRoles";
import UserRoleService = require("./UserRolesService");

class ServiceModule {
    static get config () {
        return new ContainerModule((bind: Bind) => {
            bind<IPersonService>(TYPES.IPersonService).to(PersonService).inSingletonScope();
            bind<IUserService>(TYPES.IUserService).to(UserService).inSingletonScope();
            bind<IPermissionService>(TYPES.IPermissionService).to(PermissionService).inSingletonScope();
            bind<IAuthService>(TYPES.IAuthService).to(AuthService).inSingletonScope();
            bind<IRoleService>(TYPES.IRoleService).to(RoleService).inSingletonScope();
            bind<IUserRoleService>(TYPES.IUserRoleService).to(UserRoleService).inSingletonScope();
        })
    }
}

export = ServiceModule;