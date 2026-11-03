import type { Request, Response } from 'express';
import { DetalleCompraModel } from '../Models/detalle-compras.model';

export const obtenerDetalleCompras = async (_req: Request, res: Response) => {
  const datos = await DetalleCompraModel.obtenerTodos();
  res.json(datos);
};
