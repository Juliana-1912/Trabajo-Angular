import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Venta {
  id: number;
  fecha: string;
  total: number;
  cliente_id: number;
  fecha_creacion: string;
}

@Injectable({
  providedIn: 'root',
})
export class VentasService {

  private readonly url = 'https://trabajo-angular-production.up.railway.app/api/v1/ventas';


  constructor(private http: HttpClient) {}

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.url);
  }
}