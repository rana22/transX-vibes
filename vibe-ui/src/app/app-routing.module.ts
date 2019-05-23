import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', loadChildren: './content/content.module#ContentModule'} 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule{

}
