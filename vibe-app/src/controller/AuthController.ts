import e = require("express");
import IAuthController = require("./IAuthController");
import { controller, httpPost, httpGet, injectHttpContext, interfaces, BaseHttpController } from "inversify-express-utils";
import { inject, injectable, Container } from "inversify";
import IAuthService = require("../service/IAuthService");
import TYPES from "../config/properties/Types";
import AuthService = require("../service/AuthService");

export function AuthControllerFactory(container: Container){
    @controller('/auth')
    class AuthController {
            private _service: IAuthService;
    
            constructor(@inject(TYPES.IAuthService) service: IAuthService) {
                this._service = service;
            }
    
            @httpPost('/login', container.get<e.RequestHandler>('Oauth'), container.get<e.RequestHandler>('OauthError'))
            public login(req: e.Request, res: e.Response): void {}
    
            @httpPost('/logout')
            public logout(req: e.Request, res: e.Response): any {
            }
    
            @httpGet('/session')
            public session(req: e.Request, res: e.Response): any {
                return "";
            }
    }

    return AuthController;
}
