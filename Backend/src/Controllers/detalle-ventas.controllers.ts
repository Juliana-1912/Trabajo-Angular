import type { Request, Response } from 'express';
import { DetalleVentaModel } from '../Models/detalle-ventas.model';

export const obtenerDetalleVentas = async (_req: Request, res: Response) => {
  const datos = await DetalleVentaModel.obtenerTodos();
  res.json(datos);
};
