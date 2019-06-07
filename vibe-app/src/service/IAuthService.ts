import IBaseService = require("./base/IBaseService");
import {Token} from "../model/Token";

interface IAuthService extends IBaseService<Token> {

}

export = IAuthService;