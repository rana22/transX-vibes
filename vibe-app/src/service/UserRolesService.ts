import { injectable, inject } from "inversify";
import * as express from 'express';
import { UserRoles } from "../model/UserRoles";
import { User } from "../model/User";
import IUserRoleService = require("./IUserRoleService");

@injectable()
class UserRoleService implements IUserRoleService {
    constructor(){
    }
    public create(item: UserRoles): Promise<UserRoles>{
        return new Promise<UserRoles>((resolve, reject) => {
            UserRoles.create(item).then(()=>{
                resolve(item);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    public retrieve(): Promise<any>{
        return new Promise<UserRoles[]>((resolve, reject) => {
            UserRoles.findAll().then((results) => {
                    resolve(results);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    public findById(_id: number): Promise<any>{
        return new Promise<UserRoles>((resolve, reject) => {
            UserRoles.findOne({where: {id: _id}})
                .then((results) => {
                    resolve(results || <UserRoles>{});
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    public findOne(options: Object): Promise<any>{
        return new Promise<UserRoles>((resolve, reject) => {
        });
    }

    public findAllWithId(user : User): Promise<UserRoles[]>{
        console.log("find all with ID");
        return new Promise<UserRoles[]>((resolve, reject) => {
            UserRoles.findAll({where:{ 
                id: user.id
            }}).then((results) => {
                resolve(results);
            })
            .catch((error) => {
                reject(error);
            });
        });
    } 

    public  update(_id: number, item: UserRoles): Promise<any>{
        return new Promise<UserRoles>((resolve, reject) => {

        });
    }

    public delete(_id: number): Promise<any>{
        return new Promise<UserRoles>((resolve, reject) => {

        });
    }
}

export = UserRoleService;