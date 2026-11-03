import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  VentasService,
  Venta
} from '../../Services/ventas';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas implements OnInit {

  ventas: Venta[] = [];
  cargando = true;
  error = '';

  constructor(public ventasService: VentasService) {}

  ngOnInit(): void {
    this.ventasService.getVentas().subscribe({
      next: (data: Venta[]) => {
        this.ventas = data;
        this.cargando = false;
        console.log('Ventas obtenidas de PostgreSQL:', data);
      },
      error: (err) => {
        console.error('Error al obtener ventas:', err);
        this.error = 'No fue posible cargar las ventas.';
        this.cargando = false;
      }
    });
  }
}