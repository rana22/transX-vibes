import IBaseService = require("./base/IBaseService");
import { User } from "../model/User";

interface IUserService extends IBaseService<User> {
    findByUsernamePassword(_username: string, _password: string) : Promise<User>;
    findByEmail(_email: string) : Promise<User>;
    findByResetToken(_resetPasswordToken: string) : Promise<User>;
}

export = IUserService;