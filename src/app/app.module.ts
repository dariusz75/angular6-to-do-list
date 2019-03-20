import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
