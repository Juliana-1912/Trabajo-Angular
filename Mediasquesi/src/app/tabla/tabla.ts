import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Media {
  id: number;
  nombre: string;
  precio: number;
  talla: string;
}

const MEDIAS_DATA: Media[] = [
  {id: 1, nombre: 'Medias deportivas', precio: 15000, talla: 'S'},
  {id: 2, nombre: 'Medias deportivas', precio: 18000, talla: 'M'},
  {id: 3, nombre: 'Medias tobilleras', precio: 12000, talla: 'S'},
  {id: 4, nombre: 'Medias tobilleras', precio: 14000, talla: 'M'},
  {id: 5, nombre: 'Medias largas', precio: 20000, talla: 'L'},
  {id: 6, nombre: 'Medias estampadas', precio: 17000, talla: 'M'},
  {id: 7, nombre: 'Medias escolares', precio: 13000, talla: 'S'},
  {id: 8, nombre: 'Medias escolares', precio: 15000, talla: 'M'},
  {id: 9, nombre: 'Medias térmicas', precio: 25000, talla: 'L'},
  {id: 10, nombre: 'Medias deportivas', precio: 22000, talla: 'L'},

  {id: 11, nombre: 'Medias invisibles', precio: 10000, talla: 'S'},
  {id: 12, nombre: 'Medias invisibles', precio: 11000, talla: 'M'},
  {id: 13, nombre: 'Medias invisibles', precio: 12000, talla: 'L'},
  {id: 14, nombre: 'Medias de algodón', precio: 16000, talla: 'S'},
  {id: 15, nombre: 'Medias de algodón', precio: 18000, talla: 'M'},
  {id: 16, nombre: 'Medias de algodón', precio: 20000, talla: 'L'},
  {id: 17, nombre: 'Medias deportivas premium', precio: 28000, talla: 'S'},
  {id: 18, nombre: 'Medias deportivas premium', precio: 30000, talla: 'M'},
  {id: 19, nombre: 'Medias deportivas premium', precio: 32000, talla: 'L'},
  {id: 20, nombre: 'Medias con diseño', precio: 19000, talla: 'S'},

  {id: 21, nombre: 'Medias con diseño', precio: 21000, talla: 'M'},
  {id: 22, nombre: 'Medias con diseño', precio: 23000, talla: 'L'},
  {id: 23, nombre: 'Medias para correr', precio: 24000, talla: 'S'},
  {id: 24, nombre: 'Medias para correr', precio: 26000, talla: 'M'},
  {id: 25, nombre: 'Medias para correr', precio: 28000, talla: 'L'},
  {id: 26, nombre: 'Medias de compresión', precio: 35000, talla: 'S'},
  {id: 27, nombre: 'Medias de compresión', precio: 37000, talla: 'M'},
  {id: 28, nombre: 'Medias de compresión', precio: 39000, talla: 'L'},
  {id: 29, nombre: 'Medias casuales', precio: 15000, talla: 'S'},
  {id: 30, nombre: 'Medias casuales', precio: 17000, talla: 'M'},

];

@Component({
  selector: 'app-tabla',
  imports: [MatTableModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class Tabla {
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'talla'];
  dataSource = MEDIAS_DATA;
}
