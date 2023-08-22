import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogsriegoPage } from '../logsriego/logsriego.page';
import { MedicionesPage } from '../mediciones/mediciones.page';
import { DispositivosPage } from './dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: DispositivosPage
  },
  { 
    path: 'logsriego/:id', 
    component: LogsriegoPage
  },
  { 
    path: 'mediciones/:id', 
    component: MedicionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivosPageRoutingModule {}


