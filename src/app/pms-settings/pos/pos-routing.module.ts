import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pos-points',
    loadChildren: './pos-points/pos-points.module#PosPointsModule'
  },
  {
    path: 'categories',
    loadChildren: './categories/categories.module#CategoriesModule',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
