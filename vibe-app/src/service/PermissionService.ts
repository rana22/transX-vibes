import IPermissionService = require("./IPermissionService");
import { injectable } from "inversify";
import { Permissions } from "../model/Permissions";
import { User } from "../model/User";
import { RolePermissions } from "../model/RolePermissions";
import { UserRoles } from "../model/UserRoles";

@injectable()
class PermissionService implements IPermissionService {

    create(item: Permissions) {
        return new Promise<Permissions>((resolve, reject) => {
            Permissions.create(item)
                .then((results) => {
                    resolve(results);
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    update(id: number, item: Permissions) {
        return new Promise<Permissions>((resolve, reject) => {
            Permissions.update(item, {
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

    retrieve(user) {
        return new Promise<Permissions[]>((resolve, reject) => {
            UserRoles.findAll({ where: { userid: user.id } })
                .then((result) => {
                    let roleIds = [];
                    result.forEach(c => {
                        roleIds.push(c.roleid);
                    })
                    RolePermissions.findAll({
                        where: { roleid: roleIds }
                    }
                    ).then(
                        res => {
                            let permissionids = [];
                            res.forEach(c => {
                                permissionids.push(c.permissionid);
                            })
                            Permissions.findAll({ where: { id: permissionids } }).then((results) => {
                                resolve(results);
                            })
                                .catch((error) => {
                                    reject(error);
                                });
                        }
                    )
                });
        });
    }

    delete(id: number): Promise<any> {
        return new Promise<Permissions>((resolve, reject) => {
            Permissions.destroy({ where: { id: id } })
                .then((results: any) => {
                    resolve(results || <Permissions>{});
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }


    findById(id: number) {
        return new Promise<Permissions>((resolve, reject) => {
            Permissions.findOne({ where: { id: id } })
                .then((results) => {
                    resolve(results || <Permissions>{});
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    findOne(options: Object): Promise<Permissions> {
        return new Promise<Permissions>((resolve, reject) => {

        });
    }

    getDistinctPermissionsByRole(_roleIdsArray: number[]): Promise<Permissions[]> {
        return new Promise<Permissions[]>((resolve, reject) => {
            let distinctHierarchy: Object[] = [
                {
                    model: Permissions,
                    as: "roles",
                    where: {
                        id: {
                            $in: _roleIdsArray
                        }
                    }
                }
            ];
            Permissions.findAll({
                include: distinctHierarchy
            }).then((results) => {
                if (results) {
                    resolve(results);
                } else {
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