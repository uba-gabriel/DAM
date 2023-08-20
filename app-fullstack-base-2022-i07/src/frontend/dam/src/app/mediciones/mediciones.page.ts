import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  mediciones: any[] = []; 
  public idDispositivo: any;
  //Mediciones: Array <Medicion> = new Array<Medicion>(); 
  
  //constructor(private router: ActivatedRoute, public medicionesServ: MedicionService ,public dispositivoServ: DispositivoService) { 


  constructor(private router: ActivatedRoute, private _dispositivoService: DispositivoService) {}

  ngOnInit() {
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    console.log('idDispositivo:'+this.idDispositivo);
    this.obtenerMediciones();
  }

  async obtenerMediciones() {
    console.log("Estoy en obtenerMediciones");
    try {
      this.mediciones = await this._dispositivoService.getMediciones(this.idDispositivo);
    } catch (error) {
      console.log(error);
    }
  }

}
