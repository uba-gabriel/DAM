import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogsriegoPageRoutingModule } from './logsriego-routing.module';

import { LogsriegoPage } from './logsriego.page';

import { FormatDatePipe } from '../pipes/format-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogsriegoPageRoutingModule
  ],
  declarations: [LogsriegoPage, FormatDatePipe]
})
export class LogsriegoPageModule {}
