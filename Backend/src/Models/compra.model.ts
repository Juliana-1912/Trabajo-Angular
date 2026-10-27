import { comprasDB, obtenerSiguienteId } from '../Config/compras.config';

export interface CompraProducto {
  producto_id: number;
  cantidad: number;
  precio_unitario: number;
}

export interface Compra {
  id?: number;
  fecha: Date;
  total: number;
  proveedor_id: number;
  productos: CompraProducto[];
  fecha_creacion?: Date;
}

export const CompraModel = {

  obtenerTodos: async () => {
    return comprasDB;
  },

  obtenerPorId: async (id: number) => {
    return comprasDB.find((compra) => compra.id === id);
  },

  crear: async (datos: Omit<Compra, 'id' | 'fecha_creacion'>) => {
    const nuevaCompra: Compra = {
      id: obtenerSiguienteId(),
      ...datos,
      fecha_creacion: new Date()
    };

    comprasDB.push(nuevaCompra);

    return nuevaCompra;
  },

  actualizar: async (
    id: number,
    datos: Omit<Compra, 'id' | 'fecha_creacion'>
  ) => {
    const indice = comprasDB.findIndex((compra) => compra.id === id);

    if (indice === -1) {
      return null;
    }

    const existente = comprasDB[indice]!;

    const actualizado: Compra = {
      ...existente,
      ...datos,
      id
    };

    comprasDB[indice] = actualizado;

    return actualizado;
  },

  eliminar: async (id: number) => {
    const indice = comprasDB.findIndex((compra) => compra.id === id);

    if (indice === -1) {
      return false;
    }

    comprasDB.splice(indice, 1);

    return true;
  }

};
