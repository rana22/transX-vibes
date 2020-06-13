import { Table, Column, DataType, PrimaryKey, AutoIncrement, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from "./User";


@Table
export class Token extends Model<Token>{

    @PrimaryKey
    @AutoIncrement
    @Column({ 
        type: DataType.INTEGER, 
        allowNull: false 
    })
    id!: number;
    
    @Column({
        type: DataType.STRING
    })
    token?: string;

    // @BelongsTo(() => User)
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    userId?: number;

}