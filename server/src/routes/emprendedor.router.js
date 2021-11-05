import { Router } from 'express';
import { 
    createEmprendedor,
    getEmprendedorId,
    getEmprendedorMailPass,
    updateEmprendedor,
    logoutEmprendedor
} from '../controllers/emprendedor.controller';
import { verifyToken } from '../lib/VerifyToken';

const router = Router();

// Crear emprendedor 
router.post('/create', createEmprendedor);

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
