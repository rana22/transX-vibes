import express = require("express");
import IReadController = require("./base/IReadController");
import ICreateController = require("./base/ICreateController");
import IUpdateController = require("./base/IUpdateController");
import IDeleteController = require("./base/IDeleteController");
// import { IUserModel } from "../model/IUserModel";

interface IPersonController extends ICreateController<any>, IReadController<any>, IUpdateController {
    forgotPassword(req: express.Request, res: express.Response): Promise<any>;
    findUserWithResetToken(req: express.Request, res: express.Response): Promise<any>;
    updateUserPassword(req: express.Request, res: express.Response): Promise<any>;
}

export = IPersonController;