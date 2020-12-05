import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterContentInit {
  gridByBreakpoint = {
    xl: 6,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
  };
  cols: number;
  lists = [];
  constructor(
    private mediaObserver: MediaObserver,
    private router: Router,
    private db: AngularFireDatabase
  ) {
    db.list('/lists')
      .valueChanges()
      .subscribe((lists) => {
        this.lists = lists;
        for (const key in this.lists) {
          if (this.lists.hasOwnProperty(key)) {
            this.lists[key].id = key;
          }
        }
        console.log(lists);
      });
  }

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.mediaObserver.asObservable().subscribe((change: MediaChange[]) => {
      this.cols = this.gridByBreakpoint[change[0].mqAlias];
    });
  }

  createTodoHandler() {
    this.router.navigate(['/viewer']);
  }

  openList(id: string) {
    this.router.navigate(['viewer', id]);
  }
}
