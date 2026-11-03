import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Proveedor {
  id: number;
  nombre: string;
  contacto: string | null;
  email: string | null;
  telefono: string | null;
  fecha_creacion: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {

  private readonly url = 'https://trabajo-angular-production.up.railway.app/api/v1/proveedores';

  constructor(private http: HttpClient) {}

  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url);
  }
}
