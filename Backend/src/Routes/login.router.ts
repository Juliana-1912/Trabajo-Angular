import type { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  const { usuario, contrasena } = req.body;

  if (usuario === 'Juli' && contrasena === '123456') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
};
