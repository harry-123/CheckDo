import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-list-viewer',
  templateUrl: './list-viewer.component.html',
  styleUrls: ['./list-viewer.component.scss'],
})
export class ListViewerComponent implements OnInit {
  tasks: Task[] = [];
  task: string;

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if (this.task) {
      const toDo = new Task();
      toDo.description = this.task;
      toDo.completed = false;
      this.tasks.push(toDo);
      this.task = '';
    }
  }

  compareTasks(task1: Task, task2: Task) {
    return false;
  }
}
