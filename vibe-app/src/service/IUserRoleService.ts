import IBaseService = require("./base/IBaseService");
import { UserRoles } from "../model/UserRoles";
import { User } from "../model/User";

interface IUserRoleService extends IBaseService<UserRoles> {
    findAllWithId(item: User) : Promise<UserRoles[]>;
}

export = IUserRoleService;