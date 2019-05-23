import {ContainerModule, interfaces} from "inversify";
import TYPES from "../config/properties/Types";
import IPersonService = require("./IPersonService");
import PersonService = require("./PersonService");

class ServiceModule {
    static get config () {
        return new ContainerModule((bind: interfaces.Bind) => { 
            bind<IPersonService>(TYPES.IPersonService).to(PersonService).inSingletonScope();
        })
    }
}

export = ServiceModule;