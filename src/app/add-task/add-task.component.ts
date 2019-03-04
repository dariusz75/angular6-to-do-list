import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;
  @Output()
  emitedTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.emitedTask.emit(this.newTask);
    this.newTask = '';
  }

}
