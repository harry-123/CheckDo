import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-viewer',
  templateUrl: './list-viewer.component.html',
  styleUrls: ['./list-viewer.component.scss'],
})
export class ListViewerComponent implements OnInit {
  tasks: Task[] = [];
  task: string;
  listId: string;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.listId = params.get('id');
    });

    db.list<Task>(`/lists/${this.listId}/tasks`)
      .valueChanges()
      .subscribe((tasks) => {
        console.log(tasks);
        this.tasks = tasks;
      });
  }

  ngOnInit(): void {}

  addTask() {
    if (this.task) {
      const toDo = new Task();
      toDo.description = this.task;
      toDo.completed = false;
      this.db.list(`/lists/${this.listId}/tasks`).push(toDo);
      this.task = '';
    }
  }

  compareTasks(task1: Task, task2: Task) {
    return false;
  }
}
