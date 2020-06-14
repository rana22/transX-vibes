import e = require("express");
import {controller, httpPut, httpGet, httpPost} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import { Container } from 'inversify';
import IPermissionService = require("../service/IPermissionService");
import TYPES from "../config/properties/Types";
import { Permission } from "../model/Permission";
import IPermissionController = require("./IPermissionController");

export function PermissionControllerFactory(container : Container) {

    @controller('/permissions')
    class PermissionController implements IPermissionController {

        private _service: IPermissionService;

        constructor(@inject(TYPES.IPermissionService) service: IPermissionService) {
            this._service = service;
        }

        @httpPost('/', container.get<e.RequestHandler>('Authenticate'), container.get<e.RequestHandler>('Permissions'))
        public create(req: e.Request, res: e.Response): Promise<Permission> {
            return this._service.create(req.body);
        }

        @httpGet('/', container.get<e.RequestHandler>('Authenticate'), container.get<e.RequestHandler>('Permissions'))
        public retrieve(req: e.Request, res: e.Response): Promise<Permission[]> {
            return this._service.retrieve();
        }

        @httpGet('/:id', container.get<e.RequestHandler>('Authenticate'), container.get<e.RequestHandler>('Permissions'))
        public findById(req: e.Request, res: e.Response): Promise<Permission> {
            return this._service.findById(Number(req.params.id));
        }

        @httpPut('/:id', container.get<e.RequestHandler>('Authenticate'), container.get<e.RequestHandler>('Permissions'))
        public update(req: e.Request, res: e.Response): Promise<any> {
            return this._service.update(Number(req.params.id), req.body);
        }

    }

    return PermissionController;
}