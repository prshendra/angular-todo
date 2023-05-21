import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos!: Todo[];
}
