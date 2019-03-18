import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  tasksDone: Array<string> = [];
  emitBackToToDo: Array<string> = [];
  emitRemoveDone: Array<string> = [];

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

  backToToDo(task: string) {
    this.tasksService.backToToDo(task);
  }

  removeDone(task: string) {
    this.tasksService.removeDone(task);
  }

}
