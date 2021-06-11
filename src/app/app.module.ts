import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DoneListComponent } from './done-list/done-list.component';
import { TaskComponent } from './task/task.component';
import { TodoComponent } from './todo/todo.component';
import { AddTaskComponent } from './add-task/add-task.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DoneListComponent,
    TaskComponent,
    TodoComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
