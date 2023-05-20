import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  // {path: '', },
  {path: 'login', component: LoginComponent},
  {path: 'todos', component: TodosComponent},
  // todo: possibly adding detail page which shown as dialog/modal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
