import { Table, Model, Column, AutoIncrement, PrimaryKey, DataType } from 'sequelize-typescript';


@Table
export class Permission extends Model<Permission> {

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
    
}