import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValvriegoPageRoutingModule } from './valvriego-routing.module';

import { ValvriegoPage } from './valvriego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValvriegoPageRoutingModule
  ],
  declarations: [ValvriegoPage]
})
export class ValvriegoPageModule {}
