import IRoleService = require("./IRoleService");
import {injectable,inject} from "inversify";
import md5 = require("md5");
import { Role } from "../model/Role";
var request = require('request-promise');

@injectable()
class RoleService implements IRoleService {
    constructor(){
    }

    create(item: Role) {
        return new Promise<Role>((resolve, reject) => {
            Role.create(item)
                .then((results) => {
                    resolve(results);
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    update(id: number, item: Role) {
        return new Promise<Role>((resolve, reject) => {
            Role.update(item, {
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
        return new Promise<Role[]>((resolve, reject) => {
            Role.findAll().then((results) => {
                    resolve(results);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    delete(id: number): Promise<any>{
        return new Promise<Role>((resolve, reject) => {
            Role.destroy({where: {id: id}})
                .then((results: any) => {
                    resolve(results || <Role>{});
                })
                .catch((error) => {
                    reject(error);
            });
        });
    }


    findById(id: number) {
        return new Promise<Role>((resolve, reject) => {
            Role.findOne({where: {id: id}})
                .then((results) => {
                    resolve(results || <Role>{});
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    findOne(options: Object): Promise<Role>{
        return new Promise<Role>((resolve, reject) => {

        });
    }

    public  createRole(item: Role, Roles: Array<number>) : Promise<Role> {
        return new Promise<Role>((resolve, reject) => {
            let createdId: number;
            let roleCreated = this.create(item);

            let setRolePermissions = roleCreated.then((results) => {
                createdId = results.id;
                let role = results as Role;
                return Role.belongsToMany(null, null);
            }).catch((error) => {
                reject(error);
            });

            let getCreatedRole = setRolePermissions.then(() => {
                return this.findById(createdId);
            }).catch((error) => {
                reject(error);
            });

            getCreatedRole.then((role) => {
                let promises = [];

                Promise.all(promises)
                    .then(() => {
                        resolve(role as Role);
                        return null; //this is to handle runaway promise warning, see http://goo.gl/rRqMUw
                    })
                    .catch((error) => {
                        reject(error);
                    });
                return null; //this is to handle runaway promise warning, see http://goo.gl/rRqMUw
            });

        });
    };
    public updateRole(_id: number, item: Role, Roles: Array<number>) : Promise<any>{
        return null;
    };
    

    

}

export = RoleService;