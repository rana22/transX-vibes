import { BaseMiddleware } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import express = require("express");
import TYPES from "./properties/Types";

class LoggerMiddleware extends BaseMiddleware {

    // @inject(TYPES.Logger) private readonly _logger: Logger;
    public handler(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        console.log("Auth verification");
        if (this.httpContext.user.isAuthenticated()) {
            // this._logger.info(`${this.httpContext.user.details.email} => ${req.url}`);
            console.log("log http call")
        } else {
            // this._logger.info(`Anonymous => ${req.url}`);
        }
        next();
    }
}

Object.seal(LoggerMiddleware);
export = LoggerMiddleware;