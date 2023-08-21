import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service'

@Component({
  selector: 'app-graficodetalles',
  templateUrl: './graficodetalles.page.html',
  styleUrls: ['./graficodetalles.page.scss'],
})
export class GraficodetallesPage implements OnInit {

  public dispositivoId: number = 0;
  public evId: number = 0;


  constructor(private dispositivoService: DispositivoService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.obtenerValvula();
    this.dispositivoId=Number(this.route.snapshot.paramMap.get('id'));
  }

  async obtenerValvula() {
    try {
      this.evId = await this.dispositivoService.getValvula(this.dispositivoId);
      console.log('la electroválvula es '+this.evId)
    } catch (error) {
      console.log(error);
    }
  }

}

