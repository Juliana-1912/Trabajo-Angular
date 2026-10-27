import { Router } from 'express';

import {
  obtenerInventarios,
  obtenerInventarioPorId,
  crearInventario,
  actualizarInventario,
  eliminarInventario
} from '../Controllers/inventarios.controllers';

const router = Router();

router.get('/', obtenerInventarios);

router.get('/:id', obtenerInventarioPorId);

router.post('/', crearInventario);

router.put('/:id', actualizarInventario);

router.delete('/:id', eliminarInventario);

export default router;
