import { Injectable } from '@angular/core';
import { Todo } from './models/todo';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todos: Todo[] = [
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

  todos$ = new BehaviorSubject<Todo[]>(this.todos);

  addTodo(newTodo: Todo) {
    this.todos = [...this.todos, newTodo];
    this.todos$.next(this.todos);
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((t) => t.id !== id);
    this.todos$.next(this.todos);
  }

  markAsDone(id: string) {
    const idx = this.todos.findIndex(t => t.id === id)
    const updatedTodos = [...this.todos]
    updatedTodos[idx].status = 'done';
    this.todos = updatedTodos
    this.todos$.next(this.todos);
  }
}
