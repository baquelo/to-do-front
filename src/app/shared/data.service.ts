import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'http://localhost:8080/api';

  tasks: Task[] = [
    new Task (
      '1a32-2121-2-12-12-1-21',
      '[Temas] Criar novo tema para site.',
      'Marcelo',
      'contato@marceloalmeida.dev'
    ),
    new Task (
      '1a32-2121-2-12-12-1-22',
      '[Temas] Criar login.',
      'Marcelo',
      'contato@marceloalmeida.dev',
      true,
      0
    ),
    new Task (
      '1a32-2121-2-12-12-1-23',
      '[Temas] Terminar teste da Saipos.',
      'Marcelo',
      'contato@marceloalmeida.dev',
    )
  ]

  constructor(private http: HttpClient) { }

  getCompletedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  getPendingTasks() {
    return this.tasks.filter(task => !task.completed); 
  }

  addTask(task: Task) {
    this.tasks.push(task)
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
