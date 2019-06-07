import IBaseService = require("./base/IBaseService");
import { Permission } from "../model/Permission";

interface IPermissionService extends IBaseService<Permission>{
    getDistinctPermissionsByRole(_roleIdsArray: number[]): Promise<Permission[]>;
}

export = IPermissionService;