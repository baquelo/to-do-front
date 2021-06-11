import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task.model'
import {MatDialog} from '@angular/material/dialog';

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

  onAddedTask(event: any) {
    this.tasks.push(event)
  }
}
