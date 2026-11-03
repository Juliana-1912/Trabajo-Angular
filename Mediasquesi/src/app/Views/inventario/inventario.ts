import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  InventarioService,
  Inventario
} from '../../Services/inventario';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class InventarioComponent implements OnInit {

  inventario: Inventario[] = [];
  cargando = true;
  error = '';

  constructor(public inventarioService: InventarioService) {}

  ngOnInit(): void {
    this.inventarioService.getInventario().subscribe({
      next: (data: Inventario[]) => {
        this.inventario = data;
        this.cargando = false;
        console.log('Inventario obtenido de PostgreSQL:', data);
      },
      error: (err) => {
        console.error('Error al obtener inventario:', err);
        this.error = 'No fue posible cargar el inventario.';
        this.cargando = false;
      }
    });
  }
}