import type { Request, Response } from 'express';
import { CompraModel } from '../Models/compra.model';

export const obtenerCompras = async (req: Request, res: Response) => {
  const compras = await CompraModel.obtenerTodos();

  res.json(compras);
};

export const obtenerCompraPorId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const compra = await CompraModel.obtenerPorId(id);

  if (!compra) {
    return res.status(404).json({
      message: 'Compra no encontrada'
    });
  }

  res.json(compra);
};

export const crearCompra = async (req: Request, res: Response) => {
  const compra = await CompraModel.crear(req.body);

  res.status(201).json(compra);
};

export const actualizarCompra = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const compra = await CompraModel.actualizar(id, req.body);

  if (!compra) {
    return res.status(404).json({
      message: 'Compra no encontrada'
    });
  }

  res.json(compra);
};

export const eliminarCompra = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const eliminado = await CompraModel.eliminar(id);

  if (!eliminado) {
    return res.status(404).json({
      message: 'Compra no encontrada'
    });
  }

  res.status(204).send();
};
