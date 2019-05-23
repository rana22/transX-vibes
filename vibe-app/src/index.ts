import 'reflect-metadata';
import { InversifyExpressServer, TYPE } from "inversify-express-utils";
import { Container } from 'inversify';
import './controller/ControllerModule';
import PATH from './config/properties/Path';
import sequelize from './dbconfig';
import ServiceModule = require('./service/ServiceModule');
var cors = require("cors");
import Middleware = require("./config/BaseMiddleware");

let container = new Container();
container.load(ServiceModule.config);
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

