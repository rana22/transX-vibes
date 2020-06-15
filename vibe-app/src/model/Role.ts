import { Table, PrimaryKey, AutoIncrement, Column, AllowNull, Model, DataType, HasMany } from 'sequelize-typescript';

@Table({
    tableName: 'roles'
})
export class Role extends Model<Role>{

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
    type: string;

    @Column({ 
        type: DataType.INTEGER, 
        allowNull: false 
    })
    adminaccess: number;

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