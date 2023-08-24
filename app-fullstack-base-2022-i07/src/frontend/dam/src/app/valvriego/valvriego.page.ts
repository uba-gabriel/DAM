import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valvriego',
  templateUrl: './valvriego.page.html',
  styleUrls: ['./valvriego.page.scss'],
})
export class ValvriegoPage implements OnInit {

  valriegos: any[] = []; 
  public idDispositivo: any;

  constructor(private routering: Router ,private router: ActivatedRoute, private _dispositivoService: DispositivoService, private navCtrl: NavController) {}

  ngOnInit() {
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    console.log('idDispositivo:'+this.idDispositivo);
    this.actualizarRiegos();
  }

  async actualizarRiegos() {
    console.log("Estoy en actualizarRiegos");
    try {
      this.valriegos = await this._dispositivoService.modificavalvula(this.idDispositivo);
     
      //this.router.navigate(['/pagina-original'], { queryParams: { reload: true } });
    } catch (error) {
      console.log("Salgo por error en actualizarRiegos");
      console.log(error);
    }
  }

  ionViewDidEnter() {
  
    // Regresar a la página anterior
    //this.navCtrl.back();
    this.routering.navigate(['/'], { queryParams: { reload: true } });
  }


}


