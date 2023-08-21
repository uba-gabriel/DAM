import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'

@Component({
  selector: 'app-logsriego',
  templateUrl: './logsriego.page.html',
  styleUrls: ['./logsriego.page.scss'],
})
export class LogsriegoPage implements OnInit {

  riegos: any[] = []; 
  public idDispositivo: any;

  constructor(private router: ActivatedRoute, private _dispositivoService: DispositivoService) {}

  ngOnInit() {
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    console.log('idDispositivo:'+this.idDispositivo);
    this.obtenerRiegos();
  }

  async obtenerRiegos() {
    console.log("Estoy en obtenerRiegos");
    try {
      this.riegos = await this._dispositivoService.getLogRiegos(this.idDispositivo);
    } catch (error) {
      console.log(error);
    }
  }

}

