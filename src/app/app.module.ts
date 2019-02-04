import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDoTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
