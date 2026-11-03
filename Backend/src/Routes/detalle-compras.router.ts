import { Router } from 'express';
import { obtenerDetalleCompras } from '../Controllers/detalle-compras.controllers';

const router = Router();

router.get('/', obtenerDetalleCompras);

export default router;
