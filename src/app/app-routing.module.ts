import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Table1Component } from './table1/table1.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { Table2Component } from './table2/table2.component';

const routes: Routes = [
  { path: '', redirectTo: '/table1', pathMatch: 'full' },
  { path: 'table1', component: Table1Component },
  { path: 'table2', component: Table2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
