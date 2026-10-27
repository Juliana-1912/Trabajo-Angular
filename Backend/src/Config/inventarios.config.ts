import type { Inventario } from '../Models/inventario.model';

export const inventariosDB: Inventario[] = [
  {
    id: 1,
    nombre: 'Medias deportivas',
    precio: 15000,
    talla: 'S',
    stock: 50,
    descripcion: 'Medias deportivas talla S',
    fecha_creacion: new Date('2026-10-05T18:00:00.000Z')
  },
  {
    id: 2,
    nombre: 'Medias deportivas',
    precio: 18000,
    talla: 'M',
    stock: 30,
    descripcion: 'Medias deportivas talla M',
    fecha_creacion: new Date('2026-10-05T18:05:00.000Z')
  },
  {
    id: 3,
    nombre: 'Medias tobilleras',
    precio: 12000,
    talla: 'S',
    stock: 45,
    descripcion: 'Medias tobilleras talla S',
    fecha_creacion: new Date('2026-10-05T18:10:00.000Z')
  },
  {
    id: 4,
    nombre: 'Medias largas',
    precio: 20000,
    talla: 'L',
    stock: 20,
    descripcion: 'Medias largas talla L',
    fecha_creacion: new Date('2026-10-05T18:15:00.000Z')
  },
];

let siguienteId = inventariosDB.length + 1;

export const obtenerSiguienteId = (): number => {
  const id = siguienteId;
  siguienteId += 1;

  return id;
};
