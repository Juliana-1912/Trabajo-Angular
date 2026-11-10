import type { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
  const { usuario, contraseña } = req.body;

  if (usuario === 'admin' && contraseña === '1234') {
    return res.json({ success: true, message: 'Acceso correcto' });
  }

  return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
};
