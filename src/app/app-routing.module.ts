import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' }, //for now will redirect to /login
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  // todo: possibly adding detail page which shown as dialog/modal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
