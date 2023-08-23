import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-valvriego',
  templateUrl: './valvriego.page.html',
  styleUrls: ['./valvriego.page.scss'],
})
export class ValvriegoPage implements OnInit {

  riegos: any[] = []; 
  public idDispositivo: any;

  constructor(private router: ActivatedRoute, private _dispositivoService: DispositivoService, private navCtrl: NavController) {}

  ngOnInit() {
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    console.log('idDispositivo:'+this.idDispositivo);
    this.actualizarRiegos();
  }

  async actualizarRiegos() {
    console.log("Estoy en actualizarRiegos");
    try {
      this.riegos = await this._dispositivoService.modificavalvula(this.idDispositivo);
     
    } catch (error) {
      console.log("Salgo por error en actualizarRiegos");
      console.log(error);
    }
  }

  ionViewDidEnter() {
    this.navCtrl.back();
  }
  
}


