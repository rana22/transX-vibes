import {NgModule} from "@angular/core";
import {PortalLinkTileComponent} from "./portalLinkTile.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import { CommonModule} from "@angular/common";
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    PortalLinkTileComponent
  ],
  exports: [
    PortalLinkTileComponent
  ]
})

export class PortalLinkTileModule {}
