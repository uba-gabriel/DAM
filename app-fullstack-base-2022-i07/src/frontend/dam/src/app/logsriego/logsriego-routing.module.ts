import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogsriegoPage } from './logsriego.page';

const routes: Routes = [
  {
    path: '',
    component: LogsriegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogsriegoPageRoutingModule {}
