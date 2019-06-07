import * as e from "express";
import { inject } from "inversify";
import IPersonController = require("./IPersonController");
import { controller, httpGet, httpPut, httpPost, response, request } from "inversify-express-utils";
import IPersonService = require('../service/IPersonService');
import TYPES from '../config/properties/Types';
import { Person } from '../model/Person';
import { User } from "../model/User";
import IUserService = require("../service/IUserService");

@controller('/users')
export class PersonController implements IPersonController {

    private _service: IPersonService;
    private _userService : IUserService;

    constructor(@inject(TYPES.IPersonService) service: IPersonService,
    @inject(TYPES.IUserService) userService: IUserService) {
        this._service = service;
    }

    @httpPost("/add/person")
    public create(@request() req: e.Request,
        @response() res: e.Response): Promise<Person> {

        let user = new User();
        user.firstName = req.body.name;
        user.lastName = req.body.name;
        user.email = 'emmal,123231@gmail.com';
        user.password = '123123';
        user.username = req.body.name;


        let person = req.body;
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
