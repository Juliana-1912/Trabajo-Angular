import type { Request, Response } from 'express';
import { VentaModel } from '../Models/venta.model';

export const obtenerVentas = async (req: Request, res: Response) => {
  const ventas = await VentaModel.obtenerTodos();

  res.json(ventas);
};

export const obtenerVentaPorId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const venta = await VentaModel.obtenerPorId(id);

  if (!venta) {
    return res.status(404).json({
      message: 'Venta no encontrada'
    });
  }

  res.json(venta);
};

export const crearVenta = async (req: Request, res: Response) => {
  const venta = await VentaModel.crear(req.body);

  res.status(201).json(venta);
};

export const actualizarVenta = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const venta = await VentaModel.actualizar(id, req.body);

  if (!venta) {
    return res.status(404).json({
      message: 'Venta no encontrada'
    });
  }

  res.json(venta);
};

export const eliminarVenta = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const eliminado = await VentaModel.eliminar(id);

  if (!eliminado) {
    return res.status(404).json({
      message: 'Venta no encontrada'
    });
  }

  res.status(204).send();
};
