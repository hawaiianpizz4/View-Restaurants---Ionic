import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastFoodPageRoutingModule } from './fast-food-routing.module';

import { FastFoodPage } from './fast-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastFoodPageRoutingModule
  ],
  declarations: [FastFoodPage]
})
export class FastFoodPageModule {}
