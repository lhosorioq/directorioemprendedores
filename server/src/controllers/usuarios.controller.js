import Emprendedor from '../models/emprendedor.model';


// Consultar todos los emprendedores
export const getEmprededoresAll = async (req, res) => {
    try {
        const emprendedores = await Emprendedor.find({},{img:0})
        res.status(200).json({
            emprendedores
        });
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
}

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

