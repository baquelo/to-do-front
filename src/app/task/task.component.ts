import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task | undefined

  constructor() { }

  ngOnInit(): void {
  }

  id: string | null = null

  onClick(ev: MouseEvent) {
    console.log('id', this.id)
    console.log(ev)
  }
}
