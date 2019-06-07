import e = require("express");
import IAuthController = require("./IAuthController");
import { controller, httpPost, httpGet } from "inversify-express-utils";
import { inject, injectable } from "inversify";
import IAuthService = require("../service/IAuthService");
import TYPES from "../config/properties/Types";

@injectable()
@controller('/users')
export class AuthController implements IAuthController {

    private _service: IAuthService;

    constructor(@inject(TYPES.IAuthService) service: IAuthService) {
        this._service = service;
    }

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