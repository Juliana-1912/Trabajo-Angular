import { proveedoresDB, obtenerSiguienteId } from '../Config/proveedores.config';

export interface Proveedor {
  id?: number;
  nombre: string;
  contacto?: string;
  email: string;
  telefono?: string;
  fecha_creacion?: Date;
}

export const ProveedorModel = {

  obtenerTodos: async () => {
    return proveedoresDB;
  },

  obtenerPorId: async (id: number) => {
    return proveedoresDB.find((proveedor) => proveedor.id === id);
  },

  crear: async (datos: Omit<Proveedor, 'id' | 'fecha_creacion'>) => {
    const nuevoProveedor: Proveedor = {
      id: obtenerSiguienteId(),
      ...datos,
      fecha_creacion: new Date()
    };

    proveedoresDB.push(nuevoProveedor);

    return nuevoProveedor;
  },

  actualizar: async (
    id: number,
    datos: Omit<Proveedor, 'id' | 'fecha_creacion'>
  ) => {
    const indice = proveedoresDB.findIndex((proveedor) => proveedor.id === id);

    if (indice === -1) {
      return null;
    }

    const existente = proveedoresDB[indice]!;

    const actualizado: Proveedor = {
      ...existente,
      ...datos,
      id
    };

    proveedoresDB[indice] = actualizado;

    return actualizado;
  },

  eliminar: async (id: number) => {
    const indice = proveedoresDB.findIndex((proveedor) => proveedor.id === id);

    if (indice === -1) {
      return false;
    }

    proveedoresDB.splice(indice, 1);

    return true;
  }

};
