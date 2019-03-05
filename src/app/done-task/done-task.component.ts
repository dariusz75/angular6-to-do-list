import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  @Input()
  tasksDone: Array<string> = [];
  @Output()
  emitBackToToDo = new EventEmitter<string>();
  @Output()
  emitRemoveDone = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  backToToDo(task: string) {
    this.emitBackToToDo.emit(task);
  }

  removeDone(task: string) {
    this.emitRemoveDone.emit(task);
  }

}
