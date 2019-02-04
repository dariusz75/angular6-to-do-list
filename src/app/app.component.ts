import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasksList: Array<string> = [];
  doneTask: string;
  doneList: Array<string> = [];

  add(task: string) {
    this.tasksList.push(task);
  }

  remove(task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  done(task) {
    this.doneList.push(task);
    this.remove(task);
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
