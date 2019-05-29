import {ContainerModule, interfaces} from "inversify";
import TYPES from "../config/properties/Types";
import IPersonService = require("./IPersonService");
import PersonService = require("./PersonService");
import IUserService = require("./IUserService");
// import UserService = require("./UserService");
import { User } from "../model/User";
import UserService = require("./UserService");

class ServiceModule {
    static get config () {
        return new ContainerModule((bind: interfaces.Bind) => {
            bind<IPersonService>(TYPES.IPersonService).to(PersonService).inSingletonScope();
            bind<IUserService>(TYPES.IUserService).to(UserService).inSingletonScope();
        })
    }
}

export = ServiceModule;