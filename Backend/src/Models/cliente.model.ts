
import { pool } from '../Config/database';

export interface Cliente {
  id?: number;
  nombre: string;
  telefono: string | null;
  direccion: string | null;
  fecha_creacion?: Date;
}

type DatosCliente = {
  nombre: string;
  telefono?: string | null;
  direccion?: string | null;
};

export const ClienteModel = {
  obtenerTodos: async (): Promise<Cliente[]> => {
    const resultado = await pool.query(
      `SELECT id, nombre, telefono, direccion, fecha_creacion
       FROM clientes
       ORDER BY id`
    );

    return resultado.rows;
  },

  obtenerPorId: async (id: number): Promise<Cliente | null> => {
    const resultado = await pool.query(
      `SELECT id, nombre, telefono, direccion, fecha_creacion
       FROM clientes
       WHERE id = $1`,
      [id]
    );

    return resultado.rows[0] ?? null;
  },

  crear: async (datos: DatosCliente): Promise<Cliente> => {
    const resultado = await pool.query(
      `INSERT INTO clientes (nombre, telefono, direccion)
       VALUES ($1, $2, $3)
       RETURNING id, nombre, telefono, direccion, fecha_creacion`,
      [
        datos.nombre,
        datos.telefono ?? null,
        datos.direccion ?? null
      ]
    );

    return resultado.rows[0];
  },

  actualizar: async (
    id: number,
    datos: DatosCliente
  ): Promise<Cliente | null> => {
    const resultado = await pool.query(
      `UPDATE clientes
       SET nombre = $1,
           telefono = $2,
           direccion = $3
       WHERE id = $4
       RETURNING id, nombre, telefono, direccion, fecha_creacion`,
      [
        datos.nombre,
        datos.telefono ?? null,
        datos.direccion ?? null,
        id
      ]
    );

    return resultado.rows[0] ?? null;
  },

  eliminar: async (id: number): Promise<boolean> => {
    const resultado = await pool.query(
      'DELETE FROM clientes WHERE id = $1 RETURNING id',
      [id]
    );

    return (resultado.rowCount ?? 0) > 0;
  }
};

