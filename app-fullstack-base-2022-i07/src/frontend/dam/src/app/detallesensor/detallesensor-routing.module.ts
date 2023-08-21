import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesensorPage } from './detallesensor.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesensorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesensorPageRoutingModule {}
