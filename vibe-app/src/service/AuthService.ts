import IAuthService = require("./IAuthService");
import { injectable } from "inversify";
import { Token } from "../model/Token";

@injectable()
class AuthService implements IAuthService {

    create(item: Token) {
        return new Promise<Token>((resolve, reject) => {
            Token.create(item)
                .then((results) => {
                    resolve(results);
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    update(id: number, item: Token) {
        return new Promise<Token>((resolve, reject) => {
            Token.update(item, {
                where: {
                    id: id
                }
            })
            .then((results: any) => {
                resolve(results);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

    retrieve(item: Token) {
        return new Promise<Token[]>((resolve, reject) => {
            Token.findAll().then((results) => {
                    resolve(results);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    delete(id: number): Promise<any>{
        return new Promise<Token>((resolve, reject) => {
            Token.destroy({where: {id: id}})
                .then((results: any) => {
                    resolve(results || <Token>{});
                })
                .catch((error) => {
                    reject(error);
            });
        });
    }

    findById(id: number) {
        return new Promise<Token>((resolve, reject) => {
            Token.findOne({where: {id: id}})
                .then((results) => {
                    resolve(results || <Token>{});
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    findOne(_options: Object): Promise<Token>{
        return new Promise<Token>((resolve, reject) => {
            Token.findOne({where: {_options}})
                .then((results) => {
                    resolve(results || <Token>{});
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

}

export = AuthService;