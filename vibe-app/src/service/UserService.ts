import IUserService = require("./IUserService");
import { User } from "../model/User";
import IBaseService = require("./base/IBaseService");
import { injectable, inject } from "inversify";
import md5 = require("md5");

@injectable()
class UserService implements IUserService{

    create(item: User) {
        return new Promise<User>((resolve, reject) => {
            User.create(item)
                .then((results) => {
                    resolve(results);
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    update(id: number, item: User) {
        return new Promise<User>((resolve, reject) => {
            User.update(item, {
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

    retrieve() {
        return new Promise<User[]>((resolve, reject) => {
            User.findAll().then((results) => {
                    resolve(results);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    delete(id: number): Promise<any>{
        return new Promise<User>((resolve, reject) => {
            User.destroy({where: {id: id}})
                .then((results: any) => {
                    resolve(results || <User>{});
                })
                .catch((error) => {
                    reject(error);
            });
        });
    }

    findById(id: number) {
        return new Promise<User>((resolve, reject) => {
            User.findOne({where: {id: id}})
                .then((results) => {
                    resolve(results || <User>{});
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    findOne(options: Object): Promise<User>{
        return new Promise<User>((resolve, reject) => {

        });
    }

    findByUsernamePassword(_username: string, _password: string) : Promise<User>{
        return new Promise<User>((resolve, reject) => {
            User.findOne({where:{
                username : _username,
                password : _password
            }}).then((results) => {
                if(results) {
                    resolve(results);
                }else {
                    reject();
                }
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
    
    findByEmail(_email: string) : Promise<User>{
        return new Promise<User>((resolve, reject) => {

        });
    }
    findByResetToken(_resetPasswordToken: string) : Promise<User>{
        return new Promise<User>((resolve, reject) => {

        });
    }

    public authenticateUser(_username: string, _password: string) : Promise<User> {
        return new Promise<User>((resolve, reject) => {
            this.findByUsernamePassword(_username, md5(_password))
                .then((results) => {
                    if(results) {
                        resolve(results);
                    }else {
                        reject();
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

}

export = UserService;