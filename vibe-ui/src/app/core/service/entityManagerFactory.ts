
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { MergeStrategy, QueryOptions, config, DataService, BaseAdapter} from 'breeze-client';
import { AjaxHttpClientAdapter } from 'breeze-client/adapter-ajax-httpclient';
import { JsonResultsAdaptor } from "./jsonResultsAdaptor";
import { RegistrationHelper } from '../models/registration-helper';
import { ExtendedManager } from './extendedManager';
import { ConstantMan } from "./constantMan";
import { environment } from "../../../environments/environment";
import { ApiHelper } from './api.helper.service';
import { DataServiceWebApiAdapter } from 'breeze-client/adapter-data-service-webapi';
import { ModelLibraryBackingStoreAdapter } from 'breeze-client/adapter-model-library-backing-store';
import { UriBuilderODataAdapter } from 'breeze-client/adapter-uri-builder-odata';


@Injectable()
export class EntityManagerFactory {


  private managersMap: Map<string, ExtendedManager>;
  private masterManager: ExtendedManager;
  private ds : DataService;

  constructor(private http : HttpClient, private apiHelper: ApiHelper, private jsonAdaptor:JsonResultsAdaptor,
    private registrationHelper:RegistrationHelper
              ) {
                ModelLibraryBackingStoreAdapter.register();
                UriBuilderODataAdapter.register();
                AjaxHttpClientAdapter.register(http);
                DataServiceWebApiAdapter.register();
    this.managersMap = new Map<string,ExtendedManager>();
    this.masterManager = new ExtendedManager(ConstantMan.MANAGERS.MASTER);
    this.createManagers();
  }

  private createManagers() {
    var ajaxAdaptor: AjaxHttpClientAdapter = new AjaxHttpClientAdapter(this.http);
    var apiHelper = this.apiHelper;
    ajaxAdaptor.requestInterceptor = function(requestInfo){
      var request = <any>requestInfo;
      request.request.headers = apiHelper.getDefaultHeader();
      return request;
    };
    config.registerAdapter('ajax', function() {return ajaxAdaptor} as any);
    config.initializeAdapterInstance('ajax', ajaxAdaptor.name, true);
    //TODO figure out dependency order
    if(!this.apiHelper.getServiceName()) {
      this.apiHelper.setEnvironment(environment.envName);
    }

    this.ds = new DataService({
      serviceName: this.apiHelper.getServiceName(),
      hasServerMetadata: false,
      jsonResultsAdapter: this.jsonAdaptor
    });
    this.masterManager = this.createMasterManger();
    this.managersMap.forEach((manager:ExtendedManager, name:string) =>{
      var newMgr = this.masterManager.createEmptyCopy();
    });

    this.addManagerToMap(ConstantMan.MANAGERS.MASTER, this.masterManager);

  }

  private createMasterManger() : ExtendedManager {
    var newMasterManager: ExtendedManager = new ExtendedManager({dataService: this.ds});
    newMasterManager = this.setQueryOptions(false, newMasterManager);
    this.registrationHelper.register(newMasterManager.metadataStore);

    return newMasterManager;
  }

  private setQueryOptions(includeDeleted:boolean, manager: ExtendedManager) : ExtendedManager{
    var newQo: QueryOptions = new QueryOptions();
    console.log("check for .mergeStrategy");
    newQo.mergeStrategy = MergeStrategy.OverwriteChanges;
    newQo.includeDeleted = includeDeleted;
    manager.setProperties({queryOptions:newQo});
    return manager;
  }

  public addManagerToMap(managerKey:string, manager:ExtendedManager) {
    this.managersMap.set(managerKey, manager);
  }

  public getManager(managerKey:string) : ExtendedManager {
    return this.managersMap.get(managerKey);
  }

  public addManager(managerKey:string) {
    this.addManagerToMap(managerKey, new ExtendedManager(managerKey));
  }

}
