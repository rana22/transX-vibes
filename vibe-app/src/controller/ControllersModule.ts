import { Container, ContainerModule, interfaces } from "inversify";
import { PersonControllerExport } from "./PersonController";
import IPersonController = require("./IPersonController");
import { TYPE } from "inversify-express-utils";
import TAGS from "../config/properties/Tags";
import { AuthControllerFactory } from "./AuthController";
import { RoleControllerFactory } from "./RoleController";

class ControllerModule{
    static config (container: Container) {
        PersonControllerExport(container);
        AuthControllerFactory(container);
        RoleControllerFactory(container);
    }
};

export = ControllerModule;