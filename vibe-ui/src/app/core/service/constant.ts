import { environment } from '../../../environments/environment';

export class Constant { 

    public static API = {
        BASE: {
          LOCAL   : 'http://localhost:3000/app/v1/',
          //TODO Update to ts-node-seed DEV / STAGE locations
          DEV    : 'dev',
          PROD   : 'prod'
        },
        RESOURCE : {
          USER       : 'users',
          LOGIN      : 'login',
          LOGOUT     : 'logout',
          SESSION    : 'session',
        }
      };
    
      public static STATUS_TYPE = {
        ACTIVE: "active",
        INACTIVE: "inactive"
      };

      public static okta = {
        URL : environment.okta.url,
        id : environment.okta.clientId
      }
}