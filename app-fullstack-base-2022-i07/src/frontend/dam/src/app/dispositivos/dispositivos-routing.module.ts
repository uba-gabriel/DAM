import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { ValvulasComponent } from './valvulas/valvulas.component';
import { LogRiegoComponent } from './log-riego/log-riego.component';
import { MedicionesComponent } from './mediciones/mediciones.component';
import { DispositivosPage } from './dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: DispositivosPage
  },
  { 
    path: 'detalles/:id', 
    component: DetallesComponent 
  },
  { 
    path: 'valvulas/:id', 
    component: ValvulasComponent
  },  
  { 
    path: 'log-riego/:id', 
    component: LogRiegoComponent
  },
  { 
    path: 'mediciones/:id', 
    component: MedicionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivosPageRoutingModule {}



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { DetallesComponent } from './detalles/detalles.component';
// import { ValvulasComponent } from './valvulas/valvulas.component';
// import { MedicionesComponent } from './mediciones/mediciones.component';

// import { DispositivosPage } from './dispositivos.page';

// const routes: Routes = [
//   { path: '', component: DispositivosPage},
//   { path: 'dispositivos/detalles/:id', component: DetallesComponent },
//   { path: 'dispositivos/valvulas/:id', component: ValvulasComponent },
//   { path: 'dispositivos/mediciones/:id', component: MedicionesComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class DispositivosPageRoutingModule { }

/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispositivosPage } from './dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: DispositivosPage
  },
  {
    path: 'detalle-sensor',
    loadChildren: () => import('./detalle-sensor/detalle-sensor.module').then( m => m.DetalleSensorPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivosPageRoutingModule {}*/
