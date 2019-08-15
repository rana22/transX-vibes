import {NgModule} from "@angular/core";
import {PortalLinkTileComponent} from "./portalLinkTile.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    PortalLinkTileComponent
  ],
  exports: [
    PortalLinkTileComponent
  ]
})

export class PortalLinkTileModule {}
