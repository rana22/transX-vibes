import { Table, Model, ForeignKey, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Role } from "./Role";
import { User } from './User';

@Table({
    tableName : "user_roles"
})
export class UserRoles extends Model<UserRoles>{ 
    
    @CreatedAt
    created: Date;

    @UpdatedAt
    updated: Date;

    @ForeignKey(() => User)
    @Column
    userid: number;

    @ForeignKey(() => Role)
    @Column
    roleid: number;   
}
