import {Sequelize} from 'sequelize-typescript';

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  models: [__dirname + '/model']
});

export default sequelize;
