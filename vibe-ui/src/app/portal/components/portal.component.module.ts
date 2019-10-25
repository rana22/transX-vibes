import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryAndServicesComponent } from './inventoryAndServices/inventoryAndServices.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InventoryAndServicesComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    ProfileComponent,
    InventoryAndServicesComponent
  ]
})
export class PortalComponentModule { }
