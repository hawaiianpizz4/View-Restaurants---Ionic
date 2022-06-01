import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastFoodPage } from './fast-food.page';

const routes: Routes = [
  {
    path: '',
    component: FastFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastFoodPageRoutingModule {}
