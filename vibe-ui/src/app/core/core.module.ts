import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Services from './service/services';
import { EntityManagerFactory } from './service/entityManagerFactory';
import { SharedModule } from '../shared/shared.module';
import * as Models from "./models/entityModels";
import * as DaoProvider from "./service/dao/daoProvider";
import { RegistrationHelper } from './models/registration-helper';
import { JsonResultsAdaptor } from './service/jsonResultsAdaptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule
  ],
  providers: [
    //SERVICES
    JsonResultsAdaptor,
    EntityManagerFactory,
    Services.ApiHelper,
    Services.AuthService,
    //MODELS
    RegistrationHelper,
    Models.User,
    Models.Role,
    Models.UserRoleMap,
    Models.Permission,
    Models.RolePermissionMap,
    //DAOs
    DaoProvider.provideMasterUserDAO(),
    DaoProvider.provideMasterRoleDAO(),
    DaoProvider.provideMasterPermissionDAO(),
  ]
})
export class CoreModule { }
