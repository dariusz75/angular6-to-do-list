import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask: string;
  tasksList: Array<string> = [];
  doneTask: string;
  doneList: Array<string> = [];

  add() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
  }

  remove(task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  done(task) {
    this.doneList.push(task);
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  removeDone(done) {
    this.doneList = this.doneList.filter(e => e !== done);
  }

  backToDo(done) {
    this.doneList = this.doneList.filter(e => e !== done);
    this.tasksList.push(done);
  }

  removeAll() {
    this.tasksList = [];
    this.doneList = [];
  }

}
