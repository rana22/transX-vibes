import e = require("express");
import IAuthController = require("./IAuthController");
import { controller, httpPost, httpGet, injectHttpContext, interfaces, BaseHttpController } from "inversify-express-utils";
import { inject, injectable, Container } from "inversify";
import IAuthService = require("../service/IAuthService");
import TYPES from "../config/properties/Types";

export function AuthCtrlFactory(container: Container) {

    @injectable()
    @controller('/users')
    class AuthController extends BaseHttpController {

        @injectHttpContext private readonly _httpContext: interfaces.HttpContext;

        private _service: IAuthService;

        // constructor(@inject(TYPES.IAuthService) service: IAuthService) {
        //     this._service = service;
        // }

        // @Post('/login', kernel.get<e.RequestHandler>('Oauth'), kernel.get<e.RequestHandler>('OauthError'))
        // public login(req: e.Request, res: e.Response): void {}

        @httpPost('/login')
        public login(req: e.Request, res: e.Response): void { }

        @httpPost('/logout')
        public logout(req: e.Request, res: e.Response): any {
        }

        @httpGet('/session')
        public session(req: e.Request, res: e.Response): any {
            return "req.user";
        }

    }
    return AuthController;
}