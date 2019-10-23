import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';

const routes: Routes = [
  { path: '', component: PortalComponent }
];

export const PortalRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
// export class PortalRoutingModule { }
