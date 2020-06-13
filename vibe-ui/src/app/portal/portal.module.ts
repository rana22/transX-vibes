import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalRoutingModule } from './portal.routing.module';
import { RouterModule } from '@angular/router';
import { PortalNavigationComponent } from './navigation/portal.navigation.component';
import { PortalComponentModule } from './components/portal.component.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PortalLinkTileComponent } from './components/dashboard/portalLinkTile/portalLinkTile.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormModule } from '../shared/form/form.module';
import { RoleModule } from './admin/roles/role.module';
import { AdminModule } from './admin/admin.module';
import { PortalResolve } from './portal.resolve';

@NgModule({
  declarations: [
    PortalComponent,
    PortalNavigationComponent,
    DashboardComponent,
    PortalLinkTileComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    RouterModule,
    PortalComponentModule,
    MaterialModule,
    FlexLayoutModule,
    FormModule,
    RoleModule,
    AdminModule
  ],
  providers: [
    PortalResolve
  ]
})
export class PortalModule { }
