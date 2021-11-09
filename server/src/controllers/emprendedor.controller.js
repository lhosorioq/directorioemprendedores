import jwt from 'jsonwebtoken';
import Emprendedor from '../models/emprendedor.model';
import config from '../config';

//Crear Emprendedor
export const createEmprendedor = async (req, res) => {
    try {
        const {
            nombre,
            mail,
            password,
            direccion,
            telefono,
            actividad,
            msg_description,
        } = req.body;

        const data = req.file.buffer;
        const contentType = req.file.mimetype;
        const img = { data, contentType };

        const emprendedor = new Emprendedor({
            nombre,
            mail,
            password,
            direccion,
            telefono,
            actividad,
            msg_description,
            img,
        });

        const email = await Emprendedor.findOne({ mail });

        if (email) {
            res.status(200).json({
                mensaje: 'Ya existe una cuenta con este email',
            });
        } else {
            // Encryptar contraseña
            emprendedor.password = await emprendedor.encryptPassword(password);

            // Crea token
            const token = jwt.sign({ id: emprendedor._id }, config.secret, {
                expiresIn: 60 * 60 * 2, //Expira en 2 horas
            });

            await emprendedor.save();

            res.status(200).json({
                auth: true,
                id: emprendedor._id,
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

// Consultar base de datos por id de emprendedor
export const getEmprendedorId = async (req, res) => {
    const _id = req.params.id;

    try {
        const register = await Emprendedor.findOne({ _id }).select('-password');
        res.json(register);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Consulta base de datos por email y password
export const getEmprendedorMailPass = async (req, res) => {
    const emprendedor = await Emprendedor.findOne({
        email: req.body.email,
    }).select('+password');

    // Verifico si no se encontro el email em base de datos
    if (!emprendedor) {
        return res.status(404).json("The email does'nt exist");
    }

    const validPassword = await emprendedor.comparePassword(
        req.body.password,
        emprendedor.password
    );

    // Si la validacion de contraseñaes incorrecta
    if (!validPassword) {
        return res.status(401).json({
            auth: false,
            token: null,
            mensaje: 'Password incorrect',
        });
    }

    const token = jwt.sign({ id: emprendedor._id }, config.secret, {
        expiresIn: 60 * 60 * 2,
    });
    res.status(200).json({
        auth: true,
        token,
        emprendedor,
    });
};

// Ver imagen de emprendedor
export const viewImgEmprendedor = async (req, res) => {
    const _id = req.params.id;

    try {
        const resp = await Emprendedor.findOne({ _id }, { img: 1 });
        res.set('Content-Type', resp.img.contentType);
        res.send(resp.img.data);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Actualizar un emprendedor
export const updateEmprendedor = async (req, res) => {
    const _id = req.params.id;
    console.log(_id);
    const {
        nombre,
        mail,
        password,
        direccion,
        telefono,
        actividad,
        msg_description,
    } = req.body;

    const data = req.file.buffer;
    const contentType = req.file.mimetype;
    const img = { data, contentType };

    const emprendedor = new Emprendedor({
        nombre,
        mail,
        password,
        direccion,
        telefono,
        actividad,
        msg_description,
        img,
    });

    // Encryptando contraseña
    emprendedor.password = await emprendedor.encryptPassword(password);

    const body = {
        nombre: emprendedor.nombre,
        mail: emprendedor.mail,
        password: emprendedor.password,
        direccion: emprendedor.direccion,
        telefono: emprendedor.telefono,
        actividad: emprendedor.actividad,
        msg_description: emprendedor.msg_description,
        img: emprendedor.img,
    };

    try {
        const registro = await Emprendedor.findByIdAndUpdate(_id, body, {
            new: true,
        });
        res.status(200).json({
            auth: true,
            id: registro._id,
        });
    } catch (err) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err,
        });
    }
};

// Logout de emprendedor
export const logoutEmprendedor = async (req, res) => {
    res.status(200).send({ auth: false, token: null });
};
