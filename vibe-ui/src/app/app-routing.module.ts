import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { OktaCallbackComponent, OktaLoginRedirectComponent } from '@okta/okta-angular';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', loadChildren: './content/content.module#ContentModule'},
  {path: 'implicit/callback', component: OktaCallbackComponent },
  // {path: 'login', component: OktaLoginRedirectComponent }
  {path: '', loadChildren: './content/content.module#ContentModule'},
  {path: 'implicit/callback', component: OktaCallbackComponent },
  {path: 'login', component: OktaLoginRedirectComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule{

}
