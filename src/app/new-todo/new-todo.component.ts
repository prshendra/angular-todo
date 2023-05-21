import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo, TodoStatus } from '../models/todo';
import { v4 as uuidv4 } from 'uuid';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  createTodoForm!: FormGroup;
  @Output() onSave = new EventEmitter<void>()
  @Output() onCancel = new EventEmitter<void>()

  constructor(private todosService:TodosService){}

  ngOnInit(): void {
    this.createTodoForm = new FormGroup({
      title: new FormControl(''),
      dueDate: new FormControl(''),
    });
  }

  addTodo() {
    const newTodo:Todo = {
      id: uuidv4(),
      text: this.createTodoForm.value.title,
      dueDate: new Date(this.createTodoForm.value.dueDate),
      status: TodoStatus.OPEN
    };
    this.todosService.addTodo(newTodo);
    this.onSave.emit();
  }

  abort() {
    this.onCancel.emit();
  }
}
