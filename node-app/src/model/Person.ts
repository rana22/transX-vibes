import {BelongsToMany, Column, CreatedAt, Model, Scopes, Table, UpdatedAt, PrimaryKey, AutoIncrement} from 'sequelize-typescript';

@Table
export class Person extends Model<Person> {

  @Column
  name!: string;

  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;
}
