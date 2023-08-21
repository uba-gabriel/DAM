import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficodetallesPageRoutingModule } from './graficodetalles-routing.module';

import { GraficodetallesPage } from './graficodetalles.page';

import { GraficoComponent } from '../graficodetalles/grafico/grafico.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficodetallesPageRoutingModule
  ],
  declarations: [
    GraficodetallesPage,
    GraficoComponent
  ]
})
export class GraficodetallesPageModule {}



