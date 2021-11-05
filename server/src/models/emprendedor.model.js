import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const emprendedorSchema = new Schema({
    nombre: {type: String, required: true, max: 40},
    mail: {type: String, required: true, max: 40},
    password: {type: String, required: true, max: 40, select: false},
    direccion: {type: String, required: true, max: 40},
    telefono: {type: String, required: true, max: 40},
    actividad: {type: String, required: true, max: 40},
    msg_description: {type: String, required: true, max: 300},
});

// Encrypta contraseña
emprendedorSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

// Compara contraseña ingresada con base de datos
emprendedorSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


// Exportar modelo
export default model('emprendedores', emprendedorSchema);

