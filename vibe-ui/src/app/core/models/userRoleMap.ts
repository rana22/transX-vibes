import { EntityBase } from './entityBase';
import { Injectable} from '@angular/core';
import {
  core, MetadataStore, EntityType, AutoGeneratedKeyType, DataProperty, DataType,
  NavigationProperty
} from 'breeze-client';
import {User} from "./user";
import {Role} from "./role";
import { NavigationPropertyConfig } from 'breeze-client/src/entity-metadata';

@Injectable()
export class UserRoleMap extends EntityBase {

  userId:number;
  user: User;
  roleId:number;
  role: Role;

  constructor() {
    super();
  }

  public init(metadataStore:MetadataStore) {

    this.entityType = new EntityType({
      shortName: "UserRoleMap",
      namespace: "TDK",
      defaultResourceName: "UserRoleMap",
      autoGeneratedKeyType: AutoGeneratedKeyType.Identity,
      dataProperties: [
        new DataProperty({
          name: "userId",
          dataType: DataType.Int32,
          isPartOfKey: true
        }),
        new DataProperty({
          name: "roleId",
          dataType: DataType.Int32,
          isPartOfKey: true
        })
      ],
      navigationProperties: [
        new NavigationProperty(<NavigationPropertyConfig>{
          entityTypeName: "User:#TDK",
          associationName: "UserRoleMap_User",
          name: "user",
          isScalar: true,
          foreignKeyNames: ["userId"]
        }),
        new NavigationProperty(<NavigationPropertyConfig>{
          entityTypeName: "Role:#TDK",
          associationName: "UserRoleMap_Role",
          name: "role",
          isScalar: true,
          foreignKeyNames: ["roleId"]
        })
      ]
    });

    metadataStore.addEntityType(this.entityType);
    metadataStore.registerEntityTypeCtor('UserRoleMap', UserRoleMap, UserRoleMap.initializer);
    this.entityType.createEntity();

  }
  /// [Initializer
  static initializer(entity:UserRoleMap) {
  }

}
