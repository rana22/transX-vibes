import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PortalResolve } from './portal.resolve';

const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'dashboard', 
    component: DashboardComponent ,  
    resolve : {
        portal: PortalResolve
    }
  },
  { path: 'profile', component: ProfileComponent }
];

export const PortalRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
// export class PortalRoutingModule { }
