import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalRoutingModule } from './portal.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ 
    PortalComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    RouterModule
  ]
})
export class PortalModule { }
