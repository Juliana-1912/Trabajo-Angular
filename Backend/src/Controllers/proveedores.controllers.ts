import type { Request, Response } from 'express';
import { ProveedorModel } from '../Models/proveedor.model';

export const obtenerProveedores = async (req: Request, res: Response) => {
  const proveedores = await ProveedorModel.obtenerTodos();

  res.json(proveedores);
};

export const obtenerProveedorPorId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const proveedor = await ProveedorModel.obtenerPorId(id);

  if (!proveedor) {
    return res.status(404).json({
      message: 'Proveedor no encontrado'
    });
  }

  res.json(proveedor);
};

export const crearProveedor = async (req: Request, res: Response) => {
  const proveedor = await ProveedorModel.crear(req.body);

  res.status(201).json(proveedor);
};

export const actualizarProveedor = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const proveedor = await ProveedorModel.actualizar(id, req.body);

  if (!proveedor) {
    return res.status(404).json({
      message: 'Proveedor no encontrado'
    });
  }

  res.json(proveedor);
};

export const eliminarProveedor = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const eliminado = await ProveedorModel.eliminar(id);

  if (!eliminado) {
    return res.status(404).json({
      message: 'Proveedor no encontrado'
    });
  }

  res.status(204).send();
};
