import e = require("express");
import { controller, httpPost, httpGet, injectHttpContext, interfaces, BaseHttpController, httpPut } from "inversify-express-utils";
import TYPES from "../config/properties/Types";
import { inject, injectable, Container } from "inversify";
import IRoleController = require("./IRoleController");
import IRoleService = require("../service/IRoleService");
import { Role } from "../model/Role";

export function RoleControllerFactory(container: Container) {

    @controller('/roles')
    class RoleController implements IRoleController {

        private _service: IRoleService;

        constructor(@inject(TYPES.IRoleService) service: IRoleService) {
            this._service = service;
        }

        @httpPost('/', container.get<e.RequestHandler>('Authenticate'), container.get<e.RequestHandler>('Permissions'))
        public create(req: e.Request, res: e.Response): Promise<Role> {
            let permissions: Array<number> = req.body.permissions;
            return this._service.createRole(req.body, permissions);
        }

        @httpGet('/', container.get<e.RequestHandler>('Authenticate'), container.get<e.RequestHandler>('Permissions'))
        public retrieve(req: e.Request, res: e.Response): Promise<Role[]> {
            return this._service.retrieve(req.user);
        }

        @httpGet('/:id', container.get<e.RequestHandler>('Authenticate'), container.get<e.RequestHandler>('Permissions'))
        public findById(req: e.Request, res: e.Response): Promise<Role> {
            return this._service.findById(Number(req.params.id));
        }

        @httpPut('/:id', container.get<e.RequestHandler>('Authenticate'), container.get<e.RequestHandler>('Permissions'))
        public update(req: e.Request, res: e.Response): Promise<any> {
            let permissions: Array<number> = req.body.permissions;
            let promises = [this._service.updateRole(Number(req.params.id), req.body, permissions)];
            return Promise.all(promises);
        }

    }
    return RoleController;
}