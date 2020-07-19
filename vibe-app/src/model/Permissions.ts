import { Table, Model, Column, AutoIncrement, PrimaryKey, DataType } from 'sequelize-typescript';


@Table({
    tableName: 'permissions'
})
export class Permissions extends Model<Permissions> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER, 
        allowNull: false 
    })
    id?: number;

    @Column({ 
        type: DataType.STRING, 
        allowNull: true 
    })
    url: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: true 
    })
    path: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: true 
    })
    method: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: true 
    })
    title: string;

    @Column({ 
        type: DataType.STRING, 
        allowNull: true 
    })
    description: string;

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