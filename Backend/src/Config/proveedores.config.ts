import type { Proveedor } from '../Models/proveedor.model';

export const proveedoresDB: Proveedor[] = [
  {
    id: 1,
    nombre: 'Textil Sur S.A.',
    contacto: 'Maria Perez',
    email: 'maria@textilsur.com',
    telefono: '555-1234',
    fecha_creacion: new Date('2026-10-01T10:00:00.000Z')
  },
  {
    id: 2,
    nombre: 'Hilo Premium Ltda.',
    contacto: 'Juan Gomez',
    email: 'juan@hilopr.com',
    telefono: '555-5678',
    fecha_creacion: new Date('2026-10-02T11:00:00.000Z')
  },
];

let siguienteId = proveedoresDB.length + 1;

export const obtenerSiguienteId = (): number => {
  const id = siguienteId;
  siguienteId += 1;

  return id;
};
