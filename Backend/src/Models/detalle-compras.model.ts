import { pool } from '../Config/database';

export const DetalleCompraModel = {
  obtenerTodos: async () => {
    const resultado = await pool.query(`
      SELECT dc.*, i.nombre AS producto
      FROM detalle_compras dc
      JOIN inventarios i ON dc.producto_id = i.id
      ORDER BY dc.id
    `);
    return resultado.rows;
  }
};