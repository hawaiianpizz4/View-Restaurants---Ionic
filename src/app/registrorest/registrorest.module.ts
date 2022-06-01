import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrorestPageRoutingModule } from './registrorest-routing.module';

import { RegistrorestPage } from './registrorest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrorestPageRoutingModule
  ],
  declarations: [RegistrorestPage]
})
export class RegistrorestPageModule {}
