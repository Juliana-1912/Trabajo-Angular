import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
 
  private readonly url = 'http://localhost:3000/api/v1/clientes';
 
  constructor(private http: HttpClient) {}
 
  // Obtener todos los clientes
  public getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
 
  // Obtener un cliente por ID
  getClienteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
 
  // Crear un cliente
  crearCliente(cliente: any): Observable<any> {
    return this.http.post<any>(this.url, cliente);
  }
 
  // Actualizar completamente un cliente
  actualizarCliente(id: number, cliente: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, cliente);
  }
 
  // Actualizar parcialmente un cliente
  actualizarParcialCliente(id: number, cliente: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}`, cliente);
  }
 
  // Eliminar un cliente
  eliminarCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}