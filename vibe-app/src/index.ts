import 'reflect-metadata';
import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from 'inversify';
import PATH from './config/properties/Path';
import sequelize from './dbconfig';
import ServiceModule = require('./service/ServiceModule');
var cors = require("cors");
import Middleware = require("./config/BaseMiddleware");
import ControllerModule = require('./controller/ControllersModule');
import AuthUtil = require('./util/AuthUtil');
import PermissionUtil = require('./util/PermissionUtil');
const passport = require('passport');
import * as express from 'express';
import Passport = require("passport");
import bodyParser = require('body-parser');
let container = new Container();

container.bind<express.RequestHandler>('Authenticate').toConstantValue(Passport.authenticate(['bearer'], { session: false }));
container.bind<express.RequestHandler>('Oauth').toConstantValue(AuthUtil.server.token());
container.bind('OauthError').toConstantValue(AuthUtil.server.errorHandler());
let middleware = require('./middleware');
container.load(ServiceModule.config);
container.bind<PermissionUtil>("PermissionUtil").to(PermissionUtil);
container.bind<AuthUtil>("AuthUtil").to(AuthUtil);

ControllerModule.config(container);

let permission: PermissionUtil = <PermissionUtil>container.get("PermissionUtil");
let auth : AuthUtil = <AuthUtil>container.get("AuthUtil");
auth.init();

let server = new InversifyExpressServer(container, null, { rootPath: PATH.ROOT });
var port = 3000;

server.setConfig((app) => {
    app.set("port", port);
    app.use(cors());
    app.use(bodyParser.json());
    app.use(Middleware.configuration);
    app.use(passport.initialize());
});

let app = server.build();

(async () => {
    await sequelize.sync({ force: true });
    app.listen(port, () => {
        console.log("Node app demo is running at localhost:" + port);
    });
})();


