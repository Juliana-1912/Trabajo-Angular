import express from 'express';
import cors from 'cors';
import type { Request, Response, NextFunction } from 'express';
import clientesRoutes from './Routes/clientes.router';
import inventariosRoutes from './Routes/inventarios.router';
import proveedoresRoutes from './Routes/proveedores.router';
import ventasRoutes from './Routes/ventas.router';
import comprasRoutes from './Routes/compras.router';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (_req: Request, res: Response) => {
  res.json({
    status: 'OK'
  });
});

app.use('/api/v1/clientes', clientesRoutes);
app.use('/api/v1/inventarios', inventariosRoutes);
app.use('/api/v1/proveedores', proveedoresRoutes);
app.use('/api/v1/ventas', ventasRoutes);
app.use('/api/v1/compras', comprasRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

export default app;
