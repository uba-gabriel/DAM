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

  getLogRiegos (id: any): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo/logsriego/'+id))
  }

  getUltimaMedicion (id: any): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo/ultmedicion/'+id))
  }

  getValvula (id: any): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo/valvula/'+id))
  }

  /*modifyValveState(id: any): void{
    this._http.put('http://localhost:8000/dispositivo/cambiaval/'+id,"");      
   //aux.apertura= (aux.apertura==0)? 1:0;
  }; */

  modificavalvula(id: any): Promise<any> {
    return firstValueFrom(this._http.post('http://localhost:8000/dispositivo/cambiavalv', id));
  }

  /*modifyValveState(id: any): Promise<any> {
    return firstValueFrom(this._http.post('http://localhost:8000/dispositivo/cambiavalvula/'+id))      
  }*/

}
