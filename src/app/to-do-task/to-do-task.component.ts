import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  tasksList = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObservable().subscribe(tasks => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }

  removeFromToDo(task: string) {
    this.tasksService.remove(task);
  }

  moveToDone(task: string) {
    this.tasksService.done(task);
  }

}
