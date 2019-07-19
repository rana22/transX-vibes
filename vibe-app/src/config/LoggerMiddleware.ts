import { BaseMiddleware } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import express = require("express");

@injectable()
class LoggerMiddleware extends BaseMiddleware {
    // @inject(TYPES.Logger) private readonly _logger: Logger;
    public handler(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (this.httpContext.user.isAuthenticated()) {
            // this._logger.info(`${this.httpContext.user.details.email} => ${req.url}`);
        } else {
            // this._logger.info(`Anonymous => ${req.url}`);
        }
        next();
    }
}