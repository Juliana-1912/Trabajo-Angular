import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VentasService } from '../../Services/ventas';
import { Tabla } from '../../tabla/tabla';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [Tabla],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas implements OnInit {
  data: any[] = [];

  constructor(
    private ventasService: VentasService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.ventasService.getVentas().subscribe({
      next: (rows: any[]) => {
        this.data = rows;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al consultar ventas:', error);
      },
    });
  }
}
