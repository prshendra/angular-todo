import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { CardComponent } from './card/card.component';
import { LabelComponent } from './label/label.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { DialogComponent } from './dialog/dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FloatingButtonComponent } from './floating-button/floating-button.component';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { IconComponent } from './icon/icon.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { InputDateComponent } from './input-date/input-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputTextComponent,
    CardComponent,
    LabelComponent,
    LoginComponent,
    TodosComponent,
    DialogComponent,
    DashboardComponent,
    TodoItemComponent,
    FloatingButtonComponent,
    RoundedButtonComponent,
    IconComponent,
    NewTodoComponent,
    InputDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
