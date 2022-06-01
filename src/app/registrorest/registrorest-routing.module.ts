import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrorestPage } from './registrorest.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrorestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrorestPageRoutingModule {}
