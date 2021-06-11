import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DataService } from '../shared/data.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tasksTodo: Task[] = [];
  tasksDone: Task[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.dataService.getAllTasks().subscribe((res) => {
      this.tasksTodo = res.filter(task => !task.completed);
      this.tasksDone = res.filter((task) => task.completed);
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
