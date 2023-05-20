import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  deleteIcon = faTrash
}
