import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ContentRoutingModule } from '../content/content.routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
