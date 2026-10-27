import type { Request, Response } from 'express';
import { InventarioModel } from '../Models/inventario.model';

export const obtenerInventarios = async (req: Request, res: Response) => {
  const inventarios = await InventarioModel.obtenerTodos();

  res.json(inventarios);
};

export const obtenerInventarioPorId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const inventario = await InventarioModel.obtenerPorId(id);

  if (!inventario) {
    return res.status(404).json({
      message: 'Inventario no encontrado'
    });
  }

  res.json(inventario);
};

export const crearInventario = async (req: Request, res: Response) => {
  const inventario = await InventarioModel.crear(req.body);

  res.status(201).json(inventario);
};

export const actualizarInventario = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const inventario = await InventarioModel.actualizar(id, req.body);

  if (!inventario) {
    return res.status(404).json({
      message: 'Inventario no encontrado'
    });
  }

  res.json(inventario);
};

export const eliminarInventario = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const eliminado = await InventarioModel.eliminar(id);

  if (!eliminado) {
    return res.status(404).json({
      message: 'Inventario no encontrado'
    });
  }

  res.status(204).send();
};
