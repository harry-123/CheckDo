import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewerComponent } from './list-viewer/list-viewer.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'viewer', component: ListViewerComponent },
  { path: '**', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
