import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private _http: HttpClient) { }

  getListadoDispositivos (): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo'))
  }

  getMediciones (id: any): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo/medicion/'+id))
  }

  getUltimaMedicion (id: any): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo/ultmedicion/'+id))
  }

  getLogRiegos (id: any): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo/log-riegos/'+id))
  }

  getValvula (id: any): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo/valvula/'+id))
  }
}
