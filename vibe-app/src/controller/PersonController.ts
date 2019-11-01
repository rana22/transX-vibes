import * as e from "express";
import { controller, httpGet, httpPost, request, response, httpPut } from "inversify-express-utils";
import { inject, Container } from "inversify";
import IPersonService = require('../service/IPersonService');
import TYPES from '../config/properties/Types';
import IUserService = require("../service/IUserService");
import IPersonController = require("./IPersonController");

export function PersonControllerExport(container: Container) {

    @controller('/app')
    class PersonController implements IPersonController {
        private _service: IPersonService;
        private _userService: IUserService;

        constructor(@inject(TYPES.IPersonService) service: IPersonService,
            @inject(TYPES.IUserService) userService: IUserService) {
            this._service = service;
        }

        @httpPost("/add/person")
        public create(@request() req: e.Request,
            @response() res: e.Response): any {
        }

        @httpGet('/retrive')
        public retrieve(req: e.Request, res: e.Response): any {
            return "Promise.all(promises); /retrive";
        }

        @httpGet('/:id')
        public findById(req: e.Request, res: e.Response): any {
            return "Promise.all(promises); + findById";
        }

        @httpPut('/:id')
        public update(req: e.Request, res: e.Response): any {
            return "Promise.all(promises); + update";
        }

        @httpGet('/forget')
        public forgotPassword(req: e.Request, res: e.Response): any {
            return "this._service.retrieve() /forget";
        }

        @httpGet('/findUser')
        public findUserWithResetToken(req: e.Request, res: e.Response): any {
            return "this._service.retrieve()";
        }

        @httpGet('/updateUser')
        public updateUserPassword(req: e.Request, res: e.Response): any {
            return "this._service.retrieve() updateUser";
        }
    }
    return PersonController;
}

