import { Router } from 'express';
import { obtenerDetalleVentas } from '../Controllers/detalle-ventas.controllers';

const router = Router();

router.get('/', obtenerDetalleVentas);

export default router;
