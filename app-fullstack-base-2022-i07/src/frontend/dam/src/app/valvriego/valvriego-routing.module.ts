import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValvriegoPage } from './valvriego.page';

const routes: Routes = [
  {
    path: '',
    component: ValvriegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValvriegoPageRoutingModule {}
