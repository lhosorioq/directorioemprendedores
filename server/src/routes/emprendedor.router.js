import { Router } from 'express';
import {
    createEmprendedor,
    getEmprendedorId,
    getEmprendedorMailPass,
    updateEmprendedor,
    logoutEmprendedor,
    viewImgEmprendedor,
} from '../controllers/emprendedor.controller';
import { verifyToken } from '../lib/VerifyToken';
import { upload } from '../lib/ImageMulter';

const router = Router();

// Crear emprendedor 
router.post('/create', upload.single('img'), createEmprendedor);

// Ver imagen de emprendedor 
router.get('/imagen/:id', viewImgEmprendedor);

// Consultar emprendedor por Id 
router.get('/find/:id', verifyToken, getEmprendedorId);

// Consultar emprendedor por mail y password para login
router.post('/login', getEmprendedorMailPass);

// Actualizar emprendedor
router.put('/update/:id', verifyToken, updateEmprendedor);

// Logout Emprendedor
router.post('/logout', verifyToken, logoutEmprendedor);

// Exporto el enrutador
export default router;
