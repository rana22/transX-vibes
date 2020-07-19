import IBaseService = require("./base/IBaseService");
import { Permissions } from "../model/Permissions";

interface IPermissionService extends IBaseService<Permissions>{
    getDistinctPermissionsByRole(_roleIdsArray: number[]): Promise<Permissions[]>;
}

export = IPermissionService;