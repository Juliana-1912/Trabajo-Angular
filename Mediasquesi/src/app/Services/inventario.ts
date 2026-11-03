import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Inventario {
  id: number;
  nombre: string;
  precio: number;
  talla: string | null;
  stock: number;
  descripcion: string | null;
  fecha_creacion: string;
}

@Injectable({
  providedIn: 'root',
})
export class InventarioService {

  private readonly url = 'https://trabajo-angular-production.up.railway.app/api/v1/inventarios'

  constructor(private http: HttpClient) {}

  getInventario(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.url);
  }
}
