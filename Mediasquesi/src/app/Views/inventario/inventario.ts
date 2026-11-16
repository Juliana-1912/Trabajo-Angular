import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { InventarioService } from '../../Services/inventario';
import { Tabla } from '../../tabla/tabla';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [Tabla],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class InventarioComponent implements OnInit {
  data: any[] = [];

  constructor(
    private inventarioService: InventarioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.inventarioService.getInventario().subscribe({
      next: (rows: any[]) => {
        this.data = rows;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al consultar inventario:', error);
      },
    });
  }
}
