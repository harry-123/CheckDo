import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

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
  constructor(private mediaObserver: MediaObserver) {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.mediaObserver.asObservable().subscribe((change: MediaChange[]) => {
      this.cols = this.gridByBreakpoint[change[0].mqAlias];
    });
  }
}
