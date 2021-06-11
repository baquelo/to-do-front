import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../shared/data.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-create-todo-dialog',
  templateUrl: './create-todo-dialog.component.html',
  styleUrls: ['./create-todo-dialog.component.scss'],
})
export class CreateTodoDialogComponent implements OnInit {
  showValidationErrors: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CreateTodoDialogComponent>,
    private dataService: DataService
  ) {}

  ngOnInit(): void {}

  @Output() addedTask = new EventEmitter();

  cancel(): void {
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm): void {
    if (form.invalid) {
      this.showValidationErrors = true;
      return;
    }

    console.log(form);

    const newTask = new Task(
      null,
      form.value.description,
      form.value.author_name,
      form.value.author_email,
      false,
      0
    );

    this.dataService.addTask(newTask);

    this.addedTask.emit(newTask);

    this.showValidationErrors = false;
    form.reset();
  }
}
