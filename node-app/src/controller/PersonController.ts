import * as e from "express";
import { inject } from "inversify";
import IPersonController = require("./IPersonController");
import { controller, httpGet, httpPut, httpPost, response, request } from "inversify-express-utils";
import IPersonService = require('../service/IPersonService');
import TYPES from '../config/properties/Types';
import { Person } from '../model/Person';

@controller('/users')
export class PersonController implements IPersonController {

    private _service: IPersonService;

    constructor(@inject(TYPES.IPersonService) service: IPersonService) {
        this._service = service;
    }

    @httpPost("/add/person")
    public create(@request() req: e.Request,
        @response() res: e.Response): Promise<Person> {
        let person = req.body.name;
        return this._service.create(person);
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
