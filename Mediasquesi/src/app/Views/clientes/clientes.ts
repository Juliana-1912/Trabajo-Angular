
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ClientesService,
  Cliente
} from '../../Services/clientes';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {

  clientes: Cliente[] = [];
  cargando = true;
  error = '';

  constructor(public clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe({
      next: (data: Cliente[]) => {
        this.clientes = data;
        this.cargando = false;
        console.log('Clientes obtenidos de PostgreSQL:', data);
      },
      error: (err) => {
        console.error('Error al obtener clientes:', err);
        this.error = 'No fue posible cargar los clientes.';
        this.cargando = false;
      }
    });
  }
}
