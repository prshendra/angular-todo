import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TodosService } from '../todos.service';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  @Input() name!:string;
  todos$!: Observable<Todo[]>

  constructor(private userService: UserService, private todosService: TodosService) {}

  ngOnInit() {
    this.name = this.userService.getUser() ?? 'None';
    this.todos$ = this.todosService.todos$;
  }

  isDialogVisible = false;

  showDialog() {
    this.isDialogVisible=true;
  }

  hideDialog() {
    this.isDialogVisible =false;
  }
}
