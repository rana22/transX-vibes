import { injectable, inject } from "inversify";
import { controller, BaseHttpController, httpGet } from "inversify-express-utils";
import AuthService = require("../service/AuthService");

@injectable()
@controller("/all")
export class UserDetailsController extends BaseHttpController {

    // @inject("AuthService") private readonly _authService: AuthService;

    @httpGet("/asdf")
    public async getUserDetails() {
        if (this.httpContext.user.isAuthenticated()) {
            return "this._authService.getUserDetails(this.httpContext.user.details.id);";
        } else {
            throw new Error();
        }
    }
}