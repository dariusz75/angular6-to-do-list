import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  tasksDone: Array<Task> = [];
  emitBackToToDo: Array<Task> = [];
  emitRemoveDone: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getDoneListObservable().subscribe(tasks => {
      this.tasksDone = tasks;
    });

    this.tasksService.getDoneListObservable().subscribe(tasks => {
      this.emitBackToToDo = tasks;
    });

    this.tasksService.getDoneListObservable().subscribe(tasks => {
      this.emitRemoveDone = tasks;
    });
  }

  ngOnInit() {
  }

  backToToDo(task: Task) {
    this.tasksService.backToToDo(task);
  }

  removeDone(task: Task) {
    this.tasksService.removeDone(task);
  }

}
