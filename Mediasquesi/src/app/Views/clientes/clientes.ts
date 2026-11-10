 
import { Component } from '@angular/core';
import { Tabla } from '../../tabla/tabla';
import { ClientesService } from '../../Services/clientes';
 
@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [Tabla],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css'
})
export class Clientes {
 
  clientes: any[] = [];
 
  constructor(private clientsService: ClientesService) {
   this.clientsService.getClientes().subscribe((data) => {
    this.clientes = data;
  })};
 
  columnas = [
    'id',
    'nombre',
    'telefono',
    'correo'
  ];
 
 
}

 