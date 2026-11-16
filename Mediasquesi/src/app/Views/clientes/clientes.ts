
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Tabla } from '../../tabla/tabla';
import { ClientesService } from '../../Services/clientes';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [Tabla],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css'
})
export class Clientes implements OnInit {

  data: any[] = [];

  columnas = [
    'id',
    'nombre',
    'telefono',
    'correo'
  ];

  constructor(
    private clientesService: ClientesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe({
      next: (rows: any[]) => {
        this.data = rows;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al consultar clientes:', error);
      }
    });
  }
}
