import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'portal', loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule{

}
