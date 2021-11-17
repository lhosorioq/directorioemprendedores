import jwt from 'jsonwebtoken';
import Admin from '../models/administrador.model';
import Emprendedor from '../models/emprendedor.model';
import config from '../config';

// Crear administrador
export const createAdmin = async (req, res) => {
    try {
        const { user, password } = req.body;
        const admin = new Admin({
            user,
            password,
        });

        const name = await Admin.findOne({ user });

        if (name) {
            res.status(200).json({
                mensaje: 'Ya existe una cuenta con este email de usuario',
            });
        } else {
            // Encryptar contraseña
            admin.password = await admin.encryptPassword(password);

            // Crea token
            const token = jwt.sign({ id: admin._id }, config.secret, {
                expiresIn: 60 * 60 * 2, //Expira en 2 horas
            });

            await admin.save();

            res.status(200).json({
                auth: true,
                id: admin._id,
                token,
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Login de Administradores
export const getAdminUserPass = async (req, res) => {
    const admin = await Admin.findOne({ user: req.body.user }).select(
        '+password'
    );

    // Verifico si no se encontro el usuario en base de datos
    if (!admin) {
        return res.json({ auth: false, mensaje: 'No existe administrador' });
    }

    const validPassword = await admin.comparePassword(
        req.body.password,
        admin.password
    );

    // Si la validacion de contraseñaes incorrecta
    if (!validPassword) {
        return res.json({
            auth: false,
            token: null,
            mensaje: 'Contraseña Incorrecta',
        });
    }

    const token = jwt.sign({ id: admin._id }, config.secret, {
        expiresIn: 60 * 60 * 2,
    });
    res.status(200).json({
        auth: true,
        mensaje: 'Autenticacion correcta',
        id: admin._id,
        token,
    });
};

// Consultar administradores
export const getAdmin = async (req, res) => {
    try {
        const response = await Admin.find();
        res.status(200).json({
            mensaje: 'Se encontraron administradores',
            response,
        });
    } catch (error) {
        return res.status(404).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// consultar administrador por id
export const findAdminId = async (req, res) => {
    try {
        const _id = req.params.id;
        const response = await Admin.findById({ _id }).select('-password');
        res.status(200).json({
            mensaje: 'Se encontro administrador',
            response,
        });
    } catch (error) {
        return res.status(404).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Modificar administrador
export const updateAdmin = async (req, res) => {
    const _id = req.params.id;
    const { nombre, password } = req.body;

    const admin = new Admin({
        nombre,
        password,
    });

    // Se encripta contraseña
    admin.password = admin.encryptPassword(password);

    try {
        const response = await Admin.findByIdAndUpdate({ _id }, admin, {
            new: true,
        }).select('-password');
        if (!response) {
            return res.status(200).json({
                mensaje: 'No se encontro administrador',
                response,
            });
        }
        res.status(200).json({
            mensaje: 'Se modifico usuario correctamente',
            response,
        });
    } catch (error) {
        return res.status(404).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Eliminar administrador
export const deleteAdmin = async (req, res) => {
    const _id = req.params.id;

    try {
        const response = await Admin.findByIdAndDelete({ _id });
        if (!response) {
            return res.status(404).json({
                mensaje: 'No se encontro Administrador',
            });
        }
        res.status(200).json({
            mensaje: 'Administrador elimino correctamente',
            response,
        });
    } catch (error) {
        return res.status(404).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Consultar emprendedores
export const getEmprendedores = async (req, res) => {
    try {
        const response = await Emprendedor.find();
        if (!response) {
            return res.status(404).json({
                mensaje: 'No se encontraron emprendedores',
            });
        }
        res.status(200).json({
            mensaje: 'Se encontraron emprendedores',
            response,
        });
    } catch (error) {
        return res.status(404).json({
            mensaje: 'Ocurio un error',
            error,
        });
    }
};

// Modificar emprendedores
export const updateEmprendedores = async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const response = await Emprendedor.findByIdAndUpdate(
            { _id },
            body
        ).select('-password');

        if (!response) {
            return res.status(404).json({
                mensaje: 'No se encontro emprendedor',
            });
        }
        res.status(200).json({
            mensaje: 'Emprendedor modificado satisfactoriamente',
            response,
        });
    } catch (error) {
        res.status(401).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Eliminar emprendedores
export const deleteEmprendedor = async (req, res) => {
    const _id = req.params.id;
    try {
        const response = await Emprendedor.findByIdAndDelete({ _id });

        if (!response) {
            return res
                .status(404)
                .json({ mensaje: 'No se encontro emprendedor' });
        }

        res.status(200).json({
            mensaje: 'Se elimino emprendedor',
            response,
        });
    } catch (error) {}
};
