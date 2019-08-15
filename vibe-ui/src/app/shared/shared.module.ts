import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from "ag-grid-angular";

import { PortalLinkTileModule } from "./portalLinkTile/portalLinkTile.module";

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PortalLinkTileModule
  ]
})

export class SharedModule {

}