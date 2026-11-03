import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ProveedoresService,
  Proveedor
} from '../../Services/proveedores';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proveedores.html',
  styleUrl: './proveedores.css',
})
export class Proveedores implements OnInit {

  proveedores: Proveedor[] = [];
  cargando = true;
  error = '';

  constructor(public proveedoresService: ProveedoresService) {}

  ngOnInit(): void {
    this.proveedoresService.getProveedores().subscribe({
      next: (data: Proveedor[]) => {
        this.proveedores = data;
        this.cargando = false;
        console.log('Proveedores obtenidos de PostgreSQL:', data);
      },
      error: (err) => {
        console.error('Error al obtener proveedores:', err);
        this.error = 'No fue posible cargar los proveedores.';
        this.cargando = false;
      }
    });
  }
}