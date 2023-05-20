import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  // todo: dummy text, just for presentation purposes, delete later
  todos: Todo[] = [
    {
      id: uuidv4(),
      text: 'Sumit Code to Taksu',
      dueDate: new Date(),
      status: 'open',
    },
    {
      id: uuidv4(),
      text: 'Interview with Taksu',
      dueDate: new Date(),
      status: 'done',
    },
    {
      id: uuidv4(),
      text: 'Sumit Code to Taksu',
      dueDate: new Date(),
      status: 'overdue',
    },
  ];
}
