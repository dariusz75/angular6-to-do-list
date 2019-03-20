import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObservable().subscribe(tasks => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }

  removeFromToDo(task: Task) {
    this.tasksService.remove(task);
  }

  moveToDone(task: Task) {
    task.end = new Date();
    this.tasksService.done(task);
  }

}
