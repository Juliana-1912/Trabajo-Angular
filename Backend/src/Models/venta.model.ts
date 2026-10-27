import { ventasDB, obtenerSiguienteId } from '../Config/ventas.config';

export interface VentaProducto {
  producto_id: number;
  cantidad: number;
  precio_unitario: number;
}

export interface Venta {
  id?: number;
  fecha: Date;
  total: number;
  cliente_id: number;
  productos: VentaProducto[];
  fecha_creacion?: Date;
}

export const VentaModel = {

  obtenerTodos: async () => {
    return ventasDB;
  },

  obtenerPorId: async (id: number) => {
    return ventasDB.find((venta) => venta.id === id);
  },

  crear: async (datos: Omit<Venta, 'id' | 'fecha_creacion'>) => {
    const nuevaVenta: Venta = {
      id: obtenerSiguienteId(),
      ...datos,
      fecha_creacion: new Date()
    };

    ventasDB.push(nuevaVenta);

    return nuevaVenta;
  },

  actualizar: async (
    id: number,
    datos: Omit<Venta, 'id' | 'fecha_creacion'>
  ) => {
    const indice = ventasDB.findIndex((venta) => venta.id === id);

    if (indice === -1) {
      return null;
    }

    const existente = ventasDB[indice]!;

    const actualizado: Venta = {
      ...existente,
      ...datos,
      id
    };

    ventasDB[indice] = actualizado;

    return actualizado;
  },

  eliminar: async (id: number) => {
    const indice = ventasDB.findIndex((venta) => venta.id === id);

    if (indice === -1) {
      return false;
    }

    ventasDB.splice(indice, 1);

    return true;
  }

};
