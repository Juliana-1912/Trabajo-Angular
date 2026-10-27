import type { Venta } from '../Models/venta.model';

export const ventasDB: Venta[] = [
  {
    id: 1,
    fecha: new Date('2026-10-10T10:00:00.000Z'),
    total: 33000,
    cliente_id: 1,
    productos: [
      { producto_id: 1, cantidad: 1, precio_unitario: 15000 },
      { producto_id: 2, cantidad: 1, precio_unitario: 18000 }
    ],
    fecha_creacion: new Date('2026-10-10T10:00:00.000Z')
  },
  {
    id: 2,
    fecha: new Date('2026-10-11T14:30:00.000Z'),
    total: 12000,
    cliente_id: 2,
    productos: [
      { producto_id: 3, cantidad: 1, precio_unitario: 12000 }
    ],
    fecha_creacion: new Date('2026-10-11T14:30:00.000Z')
  },
];

let siguienteId = ventasDB.length + 1;

export const obtenerSiguienteId = (): number => {
  const id = siguienteId;
  siguienteId += 1;

  return id;
};
