import type { Compra } from '../Models/compra.model';

export const comprasDB: Compra[] = [
  {
    id: 1,
    fecha: new Date('2026-10-05T09:00:00.000Z'),
    total: 750000,
    proveedor_id: 1,
    productos: [
      { producto_id: 1, cantidad: 50, precio_unitario: 15000 }
    ],
    fecha_creacion: new Date('2026-10-05T09:00:00.000Z')
  },
  {
    id: 2,
    fecha: new Date('2026-10-08T16:00:00.000Z'),
    total: 360000,
    proveedor_id: 2,
    productos: [
      { producto_id: 2, cantidad: 20, precio_unitario: 18000 }
    ],
    fecha_creacion: new Date('2026-10-08T16:00:00.000Z')
  },
];

let siguienteId = comprasDB.length + 1;

export const obtenerSiguienteId = (): number => {
  const id = siguienteId;
  siguienteId += 1;

  return id;
};
