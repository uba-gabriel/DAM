import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesensorPageRoutingModule } from './detallesensor-routing.module';

import { DetallesensorPage } from './detallesensor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesensorPageRoutingModule
  ],
  declarations: [DetallesensorPage]
})
export class DetallesensorPageModule {}
