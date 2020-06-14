import ICreateController = require("./base/ICreateController");
import IUpdateController = require("./base/IUpdateController");
import IDeleteController = require("./base/IDeleteController");
import { Permission } from "../model/Permission";
import IReadController = require("./base/IReadController");

interface IPermissionController extends ICreateController<Permission>, IReadController<Permission>, IUpdateController {
    //put new methods here
}

export = IPermissionController;