import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = 'https://mockend.com/baquelo/todo-mock/tasks';

  tasks: Task[] = [
    new Task(
      1,
      '[Temas] Criar novo tema para site.',
      'Marcelo',
      'contato@marceloalmeida.dev'
    ),
    new Task(
      2,
      '[Temas] Criar login.',
      'Marcelo',
      'contato@marceloalmeida.dev',
      true,
      0
    ),
    new Task(
      3,
      '[Temas] Terminar teste da Saipos.',
      'Marcelo',
      'contato@marceloalmeida.dev'
    ),
  ];

  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http.get<Task[]>(`${this.baseUrl}`)
  }

  // getCompletedTasks() {
  //   return this.tasks.filter((task) => task.completed);
  // }

  // getPendingTasks() {
  //   return this.tasks.filter((task) => !task.completed);
  // }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  openTask(task: Task) {
    //
  }

  closeTask(task: Task) {
    //
  }

  verifyEmail(email: string) {
    return true;
  }

  generateTasks() {
    //
  }
}
