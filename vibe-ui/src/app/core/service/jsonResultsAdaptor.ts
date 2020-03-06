import { JsonResultsAdapter, EntityType, MetadataStore, NodeContext, Entity } from 'breeze-client';
import { Injectable} from '@angular/core';
import {EntityBase} from "../models/entityBase";

@Injectable()
export class JsonResultsAdaptor extends JsonResultsAdapter {

  constructor(){
    super(
      {
      name: "jsonAdaptor",
      extractResults: (data) => {
        return data;
      },
      visitNode: (node, parseContext, nodeContext) => {
       
        var mehta : any = parseContext;
        if(node != null && node.hasOwnProperty("$type")){
          var entity:EntityBase = node as EntityBase;
          return {entityType: mehta.entityManager.metadataStore.getEntityType(entity.$type) as EntityType};
        }
        return null;
      }
    });
  }

}
