import 'reflect-metadata';
import { InversifyExpressServer, TYPE, interfaces } from "inversify-express-utils";
import { Container } from 'inversify';
import './controller/ControllerModule';
import PATH from './config/properties/Path';
import sequelize from './dbconfig';
import ServiceModule = require('./service/ServiceModule');
var cors = require("cors");
import Middleware = require("./config/BaseMiddleware");
import * as express from 'express';
import Passport = require("passport");
import PermissionUtil = require('./util/PermissionUtil');
import AuthUtil = require('./util/AuthUtil');
import ControllerModule = require('./controller/ControllerModule');
import IAuthController = require('./controller/IAuthController');
import TAGS from './config/properties/Tags';
import TYPES from './config/properties/Types';
import { AuthController } from './controller/AuthController';

let user = {'id' : 1, 
            username  : 'groot' ,   
            password :'473c0812623754d187d1e4c96af5d5cb' ,  
            email : 'iam@groot.com' ,   
            firstname : 'Groot123' ,   
            lastname : 'Iam'};

let container = new Container();

container.load(ServiceModule.config);
container.bind<express.RequestHandler>('Authenticate').toConstantValue(Passport.authenticate(['bearer'], { session: false }));

container.bind<express.RequestHandler>('Admin').toConstantValue((req: express.Request, res: express.Response, next: Function) => {
    // if(!user.hasAccess()) {
    //     res.statusCode = 403;
    //     return res.end('Forbidden');
    // }
    return next();
});

container.bind<express.RequestHandler>('Permissions').toConstantValue((req: express.Request, res: express.Response, next: Function) => {
    permission.checkUserPermission(req.baseUrl,req.route.path,req.method, user ).then(function (accessResult) {
        if(!accessResult) {
            res.statusCode = 403;
            return res.end('Forbidden');
        }
        return next();
    });
});

container.bind<express.RequestHandler>('Oauth').toConstantValue(AuthUtil.server.token());
container.bind<express.ErrorRequestHandler>('OauthError').toConstantValue(AuthUtil.server.errorHandler());
container.bind<PermissionUtil>("PermissionUtil").to(PermissionUtil);
container.bind<AuthUtil>("Auth").to(AuthUtil);

container.bind<interfaces.Controller>(TYPE.Controller)
         .to(AuthController).inSingletonScope().whenTargetNamed(TAGS.AuthController);

let permission: PermissionUtil = <PermissionUtil>container.get("PermissionUtil");
let auth : AuthUtil = <AuthUtil>container.get("Auth");
auth.init();

let server = new InversifyExpressServer(container, null, { rootPath: PATH.ROOT });
var port = 3000;

server.setConfig((app) => {
    app.set("port", port);
    app.use(cors());
    app.use(Middleware.configuration);
});

let app = server.build();

(async () => {
    await sequelize.sync({ force: true });
    app.listen(port, () => {
        console.log("Node app demo is running at localhost:" + port);
    });
})();

