import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogsriegoPageRoutingModule } from './logsriego-routing.module';

import { LogsriegoPage } from './logsriego.page';

//import { DatepipePipe } from '../pipes/datepipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogsriegoPageRoutingModule
  ],
  declarations: [LogsriegoPage/*, DatepipePipe*/]
})
export class LogsriegoPageModule {}
