import { Router } from 'express';
import {
    getEmprededoresAll,
    viewImgEmprendedor,
} from '../controllers/usuarios.controller';

const router = Router();

// Consultar todos los emprendedores
router.get('/', getEmprededoresAll);

// Ver imagen de emprendedor 
router.get('/:id', viewImgEmprendedor);

// Exporto el enrutador 
export default router;