
import type { Cliente } from '../Models/cliente.model';

export const clientesDB: Cliente[] = [
  {
    id: 1,
    nombre: 'Ana',
    telefono: '3001234567',
    direccion: 'Bogotá',
    fecha_creacion: new Date('2026-10-05T18:00:00.000Z')
  },
  {
    id: 2,
    nombre: 'Carlos',
    telefono: '3101234567',
    direccion: 'Soacha',
    fecha_creacion: new Date('2026-10-05T18:05:00.000Z')
  },
  {
    id: 3,
    nombre: 'Natalia',
    telefono: '3201234567',
    direccion: 'Mosquera',
    fecha_creacion: new Date('2026-10-05T18:10:00.000Z')
  }
];

let siguienteId = clientesDB.length + 1;

export const obtenerSiguienteId = (): number => {
  const id = siguienteId;
  siguienteId += 1;

  return id;
};
