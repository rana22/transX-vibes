import { Role } from './Role';
import { injectable } from 'inversify';
import { Model, Table, PrimaryKey, AutoIncrement, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'users'
})
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
    firstname: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: false 
    })
    lastname: string;

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