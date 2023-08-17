import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispositivosPage } from './dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: DispositivosPage
  },  {
    path: 'detalle-sensor',
    loadChildren: () => import('./detalle-sensor/detalle-sensor.module').then( m => m.DetalleSensorPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivosPageRoutingModule {}
