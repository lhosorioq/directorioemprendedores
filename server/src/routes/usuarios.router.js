import { Router } from 'express';
import {
    getEmprededoresAll,
    viewImgEmprendedor,
    getEmprededoresFilter,
    getEmprededoresVisibles,
} from '../controllers/usuarios.controller';

const router = Router();

// Consultar todos los emprendedores
router.get('/', getEmprededoresAll);

// Consultar emprendedores visibles
router.get('/visible', getEmprededoresVisibles);

// Consultar emprendedor por filtro de busqueda
router.post('/filter', getEmprededoresFilter);

// Ver imagen de emprendedor 
router.get('/:id', viewImgEmprendedor);

// Exporto el enrutador 
export default router;