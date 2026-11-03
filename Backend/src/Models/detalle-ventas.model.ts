import { pool } from '../Config/database';

export const DetalleVentaModel = {
  obtenerTodos: async () => {
    const resultado = await pool.query(`
      SELECT dv.*, i.nombre AS producto
      FROM detalle_ventas dv
      JOIN inventarios i ON dv.producto_id = i.id
      ORDER BY dv.id
    `);
    return resultado.rows;
  }
};
