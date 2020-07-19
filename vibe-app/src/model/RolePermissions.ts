import { Table, Model, ForeignKey, Column, CreatedAt, UpdatedAt, BelongsTo } from 'sequelize-typescript';
import { Role } from "./Role";
import { Permissions } from "./Permissions";

@Table({
    tableName : "role_permissions"
})
export class RolePermissions extends Model<RolePermissions>{ 
    @CreatedAt
    created: Date;

    @UpdatedAt
    updated: Date;

    @ForeignKey(() => Role)
    @Column
    roleid: number;
  
    @ForeignKey(() => Permissions)
    @Column
    permissionid: number;

    @BelongsTo(() =>  Permissions, 'permissionid')
    permission: Permissions;
}
