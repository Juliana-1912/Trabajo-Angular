import { Component } from '@angular/core';
import { Tabla } from '../../tabla/tabla';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [Tabla],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {}

