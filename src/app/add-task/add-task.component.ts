import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  showValidationErrors: boolean = false;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {}

  @Output() addedTask = new EventEmitter();

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
