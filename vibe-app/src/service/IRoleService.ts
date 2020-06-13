import IBaseService = require("./base/IBaseService");
import { Role } from "../model/Role";

interface IRoleService extends IBaseService<Role> {
    createRole(item: Role, permissions: Array<number>) : Promise<Role>;
    updateRole(_id: number, item: Role, permissions: Array<number>) : Promise<any>;
}

export = IRoleService;