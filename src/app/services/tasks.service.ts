import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';


@Injectable()
export class TasksService {
  private tasksList: Array<Task> = [];
  private doneTask: Task;
  private doneList: Array<Task> = [];

  private tasksListObservable = new BehaviorSubject<Array<Task>>(this.tasksList);
  private doneListObservable = new BehaviorSubject<Array<Task>>(this.doneList);

  constructor() {
    this.tasksListObservable.next(this.tasksList);
  }

  addTask(task: Task) {
    this.tasksList.push(task);
    this.tasksListObservable.next(this.tasksList);
  }

  remove(task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObservable.next(this.tasksList);
  }

  done(task) {
    this.doneList.push(task);
    this.remove(task);
    this.doneListObservable.next(this.doneList);
  }

  removeDone(done) {
    this.doneList = this.doneList.filter(e => e !== done);
    this.doneListObservable.next(this.doneList);
  }

  backToToDo(done) {
    this.doneList = this.doneList.filter(e => e !== done);
    this.tasksList.push(done);
    this.doneListObservable.next(this.doneList);
  }

  removeAll() {
    this.tasksList = [];
    this.doneList = [];
    this.tasksListObservable.next(this.tasksList);
    this.doneListObservable.next(this.doneList);
  }

  getTasksListObservable(): Observable<Array<Task>> {
    return this.tasksListObservable.asObservable();
  }

  getDoneListObservable(): Observable<Array<Task>> {
    return this.doneListObservable.asObservable();
  }

}
