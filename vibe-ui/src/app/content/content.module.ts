import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DownloadComponent } from './download/download.component';
import { ContentRoutingModule } from './content.routing.module';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ContentComponent, 
                  HomeComponent, 
                  AboutComponent, 
                  GalleryComponent, 
                  DownloadComponent
                ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    RouterModule,
    MatCardModule,
    SharedModule
  ],
  exports: [ContentComponent, 
            HomeComponent, 
            AboutComponent, 
            GalleryComponent, 
            DownloadComponent
          ]
})
export class ContentModule {

}
