import './IPersonController';
import './PersonController';
import './AuthController';


import { InversifyExpressServer, TYPE, interfaces } from "inversify-express-utils";
import {ContainerModule} from "inversify";
// import Bind = interfaces.Bind;
import { Container } from 'inversify';
import { AuthCtrlFactory } from './AuthController';
import IAuthController = require('./IAuthController');
import TAGS from '../config/properties/Tags';

class ControllerModule {
    static config (container: Container) {
        return new ContainerModule((bind) => {
            let authController = AuthCtrlFactory(container);
            bind<interfaces.Controller>(TYPE.Controller).to(authController)
                    .whenTargetNamed(TAGS.AuthController);
            });
    }

}

export = ControllerModule;