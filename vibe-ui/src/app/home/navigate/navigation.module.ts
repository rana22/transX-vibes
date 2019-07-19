import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { ContentRoutingModule } from '../../content/content.routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [SidebarComponent]
})
export class NavigateModule { }
