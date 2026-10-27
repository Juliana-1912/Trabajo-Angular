import { inventariosDB, obtenerSiguienteId } from '../Config/inventarios.config';

export interface Inventario {
  id?: number;
  nombre: string;
  precio: number;
  talla: string;
  stock: number;
  descripcion?: string;
  fecha_creacion?: Date;
}

export const InventarioModel = {

  obtenerTodos: async () => {
    return inventariosDB;
  },

  obtenerPorId: async (id: number) => {
    return inventariosDB.find((inventario) => inventario.id === id);
  },

  crear: async (datos: Omit<Inventario, 'id' | 'fecha_creacion'>) => {
    const nuevoInventario: Inventario = {
      id: obtenerSiguienteId(),
      ...datos,
      fecha_creacion: new Date()
    };

    inventariosDB.push(nuevoInventario);

    return nuevoInventario;
  },

  actualizar: async (
    id: number,
    datos: Omit<Inventario, 'id' | 'fecha_creacion'>
  ) => {
    const indice = inventariosDB.findIndex((inventario) => inventario.id === id);

    if (indice === -1) {
      return null;
    }

    const existente = inventariosDB[indice]!;

    const actualizado: Inventario = {
      ...existente,
      ...datos,
      id
    };

    inventariosDB[indice] = actualizado;

    return actualizado;
  },

  eliminar: async (id: number) => {
    const indice = inventariosDB.findIndex((inventario) => inventario.id === id);

    if (indice === -1) {
      return false;
    }

    inventariosDB.splice(indice, 1);

    return true;
  }

};
