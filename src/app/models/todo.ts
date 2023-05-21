export enum TodoStatus {
  OPEN = 'open',
  DONE = 'done',
  OVERDUE = 'overdue',
}

export interface Todo {
  id: string;
  text: string;
  dueDate: Date;
  status: string;
}
