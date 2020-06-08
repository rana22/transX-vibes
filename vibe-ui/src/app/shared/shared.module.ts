import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from "ag-grid-angular";
import { ListGridComponent } from './listGrid/listGrid.component';
import { EditButtonComponent } from './listGrid/editButton/editButton.component';
import { MaterialModule } from '../material.module';
import { ChipsInputModule } from './chipsInput/chipsInput.module';
import { AutoCompleteModule } from './autoComplete/autoComplete.module';
import { PortalLinkTileModule } from './portalLinkTile/portalLinkTile.module';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AgGridModule.withComponents([
      ListGridComponent,
      EditButtonComponent
    ]),
    ChipsInputModule,
    AutoCompleteModule,
    PortalLinkTileModule
  ],
  declarations: [
    ListGridComponent,
    EditButtonComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ListGridComponent,
    ChipsInputModule,
    AutoCompleteModule,
    PortalLinkTileModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}