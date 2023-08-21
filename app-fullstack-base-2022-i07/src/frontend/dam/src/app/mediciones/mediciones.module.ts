import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicionesPageRoutingModule } from './mediciones-routing.module';

import { MedicionesPage } from './mediciones.page';

import { DatepipePipe } from '../pipes/datepipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicionesPageRoutingModule
  ],
declarations: [MedicionesPage, DatepipePipe]
})
export class MedicionesPageModule {}
