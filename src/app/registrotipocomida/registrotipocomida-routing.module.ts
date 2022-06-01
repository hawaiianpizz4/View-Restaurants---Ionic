import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrotipocomidaPage } from './registrotipocomida.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrotipocomidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrotipocomidaPageRoutingModule {}
