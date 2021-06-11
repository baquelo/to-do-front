import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task.model'
import {MatDialog} from '@angular/material/dialog';
import { CreateTodoDialogComponent } from '../create-todo-dialog/create-todo-dialog.component';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() tasks: Task[] = []

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addTask(): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onAddedTask(event: any) {
    this.tasks.push(event)
  }
}
