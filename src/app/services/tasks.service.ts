import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class TasksService {
  private tasksList: Array<string> = [];
  private doneTask: string;
  private doneList: Array<string> = [];

  private tasksListObservable = new BehaviorSubject<Array<string>>(this.tasksList);
  private doneListObservable = new BehaviorSubject<Array<string>>(this.doneList);

  constructor() {
    this.tasksListObservable.next(this.tasksList);
  }

  addTask(task: string) {
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

  getTasksListObservable(): Observable<Array<string>> {
    return this.tasksListObservable.asObservable();
  }

  getDoneListObservable(): Observable<Array<string>> {
    return this.doneListObservable.asObservable();
  }

}
