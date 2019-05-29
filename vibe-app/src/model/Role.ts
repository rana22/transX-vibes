import { Table, PrimaryKey, AutoIncrement, Column, AllowNull, Model, DataType } from "sequelize-typescript";

@Table
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
        type: DataType.BOOLEAN, 
        allowNull: false 
    })
    adminaccess: boolean;

}