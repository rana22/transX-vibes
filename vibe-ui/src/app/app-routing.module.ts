import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { OktaCallbackComponent, OktaLoginRedirectComponent } from '@okta/okta-angular';
import { FormComponent } from './content/form/form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', loadChildren: './content/content.module#ContentModule'},
  {path: 'implicit/callback', component: OktaCallbackComponent },
  {path: 'login', component: OktaLoginRedirectComponent },
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule{

}
