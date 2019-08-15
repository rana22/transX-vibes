import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DownloadComponent } from './download/download.component';
import { ContentRoutingModule } from './content.routing.module';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContentComponent, 
                  HomeComponent, 
                  AboutComponent, 
                  GalleryComponent, 
                  DownloadComponent, 
                  FormComponent,
                ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
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
