import ICreateController = require("./base/ICreateController");
import IUpdateController = require("./base/IUpdateController");
import IDeleteController = require("./base/IDeleteController");
import { Permissions } from "../model/Permissions";
import IReadController = require("./base/IReadController");

interface IPermissionController extends ICreateController<Permissions>, IReadController<Permissions>, IUpdateController {
    //put new methods here
}

export = IPermissionController;