
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  id: number;
  nombre: string;
  telefono: string | null;
  direccion: string | null;
  fecha_creacion: string;
}

export type NuevoCliente = {
  nombre: string;
  telefono?: string | null;
  direccion?: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

  private readonly url = 'http://localhost:3000/api/v1/clientes';

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  // Obtener un cliente por ID
  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  // Crear un cliente
  crearCliente(cliente: NuevoCliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  // Actualizar completamente un cliente
  actualizarCliente(
    id: number,
    cliente: NuevoCliente
  ): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/${id}`, cliente);
  }

  // Actualizar parcialmente un cliente
  actualizarParcialCliente(
    id: number,
    cliente: Partial<NuevoCliente>
  ): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.url}/${id}`, cliente);
  }

  // Eliminar un cliente
  eliminarCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
