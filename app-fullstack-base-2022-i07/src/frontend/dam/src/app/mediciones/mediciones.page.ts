import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  dispositivos: any[] = []; 


  constructor(private _dispositivoService: DispositivoService) {}

  ngOnInit() {
    this.obtenerDispositivos();
  }

  async obtenerDispositivos() {
    try {
      this.dispositivos = await this._dispositivoService.getListadoDispositivos();
    } catch (error) {
      console.log(error);
    }
  }

}
