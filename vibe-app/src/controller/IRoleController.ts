import express = require("express");
import IReadController = require("./base/IReadController");
import ICreateController = require("./base/ICreateController");
import IUpdateController = require("./base/IUpdateController");
import IDeleteController = require("./base/IDeleteController");
import { Role } from "../model/Role";

interface IRoleController extends ICreateController<Role>, IReadController<Role> {

}

export = IRoleController;