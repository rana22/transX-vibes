import { BelongsToMany, Column, CreatedAt, Model, Scopes, Table, UpdatedAt, PrimaryKey, AutoIncrement, AllowNull, DataType } from 'sequelize-typescript';
import { Role } from './Role';
import { injectable } from 'inversify';

@Table
export class User extends Model<User>{

    @PrimaryKey
    @AutoIncrement
    @Column({ 
        type: DataType.INTEGER, 
        allowNull: false 
    })
    id!: number;

    @Column({ 
        type: DataType.STRING, 
        allowNull: false 
    })
    username!: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: false 
    })
    password!: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: false 
    })
    email: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: false 
    })
    firstName: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: false 
    })
    lastName: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: true 
    })
    status?: string;

    // roles?: Role[];
    @Column({ 
        type: DataType.STRING, 
        allowNull: true 
    })
    resetPasswordToken?: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: true,
        
    })
    resetPasswordExpires?: string;

    @Column({ 
        type: DataType.DATE, 
        allowNull: true 
    })
    createdAt?: string;

    @Column({ 
        type: DataType.DATE, 
        allowNull: true 
    })
    updatedAt?: string;
}