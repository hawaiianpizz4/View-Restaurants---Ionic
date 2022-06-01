import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrotipocomidaPageRoutingModule } from './registrotipocomida-routing.module';

import { RegistrotipocomidaPage } from './registrotipocomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrotipocomidaPageRoutingModule
  ],
  declarations: [RegistrotipocomidaPage]
})
export class RegistrotipocomidaPageModule {}
