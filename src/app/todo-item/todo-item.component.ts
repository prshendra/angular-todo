import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  deleteIcon = faTrash;
  isDeleteDialogVisible = false;

  constructor(private todosService: TodosService) {}

  remove() {
    this.todosService.removeTodo(this.todo.id);
    this.hideDeleteDialog();
  }

  markAsDone() {
    this.todosService.markAsDone(this.todo.id);
  }

  showDeleteDialog() {
    this.isDeleteDialogVisible = true;
  }

  hideDeleteDialog() {
    this.isDeleteDialogVisible = false;
  }
}
