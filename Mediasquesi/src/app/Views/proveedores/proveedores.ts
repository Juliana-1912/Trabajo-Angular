import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProveedoresService } from '../../Services/proveedores';
import { Tabla } from '../../tabla/tabla';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [Tabla],
  templateUrl: './proveedores.html',
  styleUrl: './proveedores.css',
})
export class Proveedores implements OnInit {
  data: any[] = [];

  constructor(
    private proveedoresService: ProveedoresService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.proveedoresService.getProveedores().subscribe({
      next: (rows: any[]) => {
        this.data = rows;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al consultar proveedores:', error);
      },
    });
  }
}
