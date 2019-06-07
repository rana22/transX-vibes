import IPermissionService = require("./IPermissionService");
import { injectable } from "inversify";
import { Permission } from "../model/Permission";

@injectable()
class PermissionService implements IPermissionService{

    create(item: Permission) {
        return new Promise<Permission>((resolve, reject) => {
            Permission.create(item)
                .then((results) => {
                    resolve(results);
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    update(id: number, item: Permission) {
        return new Promise<Permission>((resolve, reject) => {
            Permission.update(item, {
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
        return new Promise<Permission[]>((resolve, reject) => {
            Permission.findAll().then((results) => {
                    resolve(results);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    delete(id: number): Promise<any>{
        return new Promise<Permission>((resolve, reject) => {
            Permission.destroy({where: {id: id}})
                .then((results: any) => {
                    resolve(results || <Permission>{});
                })
                .catch((error) => {
                    reject(error);
            });
        });
    }


    findById(id: number) {
        return new Promise<Permission>((resolve, reject) => {
            Permission.findOne({where: {id: id}})
                .then((results) => {
                    resolve(results || <Permission>{});
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    findOne(options: Object): Promise<Permission>{
        return new Promise<Permission>((resolve, reject) => {

        });
    }

    getDistinctPermissionsByRole(_roleIdsArray: number[]): Promise<Permission[]>{
        return new Promise<Permission[]>((resolve, reject) => {
            let distinctHierarchy: Object[] = [
                {
                    model: Permission,
                    as: "roles",
                    where: {
                        id: {
                            $in: _roleIdsArray
                        }
                    }
                }
            ];
            Permission.findAll({
                    include: distinctHierarchy
                }).then((results) => {
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
    };
}

export = PermissionService;