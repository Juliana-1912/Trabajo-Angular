import { clientesDB, obtenerSiguienteId } from '../Config/clientes.config';

export interface Cliente {
  id?: number;
  nombre: string;
  apellido: string;
  edad?: number;
  sexo?: string;
  email: string;
  fecha_creacion?: Date;
}

export const ClienteModel = {

  obtenerTodos: async () => {
    return clientesDB;
  },

  obtenerPorId: async (id: number) => {
    return clientesDB.find((cliente) => cliente.id === id);
  },

  crear: async (datos: Omit<Cliente, 'id' | 'fecha_creacion'>) => {
    const nuevoCliente: Cliente = {
      id: obtenerSiguienteId(),
      ...datos,
      fecha_creacion: new Date()
    };

    clientesDB.push(nuevoCliente);

    return nuevoCliente;
  },

  actualizar: async (
    id: number,
    datos: Omit<Cliente, 'id' | 'fecha_creacion'>
  ) => {
    const indice = clientesDB.findIndex((cliente) => cliente.id === id);

    if (indice === -1) {
      return null;
    }

    const existente = clientesDB[indice]!;

    const actualizado: Cliente = {
      ...existente,
      ...datos,
      id
    };

    clientesDB[indice] = actualizado;

    return actualizado;
  },

  eliminar: async (id: number) => {
    const indice = clientesDB.findIndex((cliente) => cliente.id === id);

    if (indice === -1) {
      return false;
    }

    clientesDB.splice(indice, 1);

    return true;
  }

};
