import {Sequelize} from 'sequelize-typescript';
var fs = require('fs');

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  models: [__dirname + '/model'],
  logging: false
});

class Setup {

  static executeSqlSeeds(filePaths:Array<string>) : Promise<any> {
      return new Promise(function(resolve) {
          let promises = [];
          for (let filePath of filePaths) {
              promises.push(Setup.executeSqlSeed(filePath));
          }
          Promise.all(promises).then(function(results){
              resolve(results);
          }).catch(function(error) {
              console.log(error);
          });
      });
  }

  private static executeSqlSeed(filePath:string){
      let sql = Setup.sqlFileToString(filePath);
      sequelize.query(sql,{
      }).then(function(results){
        console.log(results);
      }).catch(function(error){
        console.warn(error);
      });
  }

  private static sqlFileToString(filePath:string) : string {
      let sql = fs.readFileSync(filePath).toString()
          .replace(/(\r\n|\n|\r)/gm," ") // remove newlines
          .replace(/\s+/g, ' '); // excess white space
      return sql;
  }
}

Setup.executeSqlSeeds([
                'seed/init.sql',
                'seed/users.sql', 
                'seed/roles.sql',
                'seed/user_roles.sql',
                'seed/role_permissions.sql'
              ]);

export default sequelize;
