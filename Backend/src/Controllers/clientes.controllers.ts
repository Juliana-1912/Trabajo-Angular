import type { Request, Response } from 'express';
import { ClienteModel } from '../Models/cliente.model';
 
export const obtenerClientes = async (req: Request, res: Response) => {
  const clientes = await ClienteModel.obtenerTodos();
 
  res.json(clientes);
};
 
export const obtenerClientePorId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
 
  const cliente = await ClienteModel.obtenerPorId(id);
 
  if (!cliente) {
    return res.status(404).json({
      message: 'Cliente no encontrado'
    });
  }
 
  res.json(cliente);
};
 
export const crearCliente = async (req: Request, res: Response) => {
  const cliente = await ClienteModel.crear(req.body);
 
  res.status(201).json(cliente);
};
 
export const actualizarCliente = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
 
  const cliente = await ClienteModel.actualizar(id, req.body);
 
  if (!cliente) {
    return res.status(404).json({
      message: 'Cliente no encontrado'
    });
  }
 
  res.json(cliente);
};
 
export const eliminarCliente = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
 
  const eliminado = await ClienteModel.eliminar(id);
 
  if (!eliminado) {
    return res.status(404).json({
      message: 'Cliente no encontrado'
    });
  }
 
  res.status(204).send();
};