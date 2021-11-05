import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const AdminSchema = new Schema({
    user: {type: String, required: true, max: 40},
    password: {type: String, required: true, max: 15, select: false},
});

// Encrypta contraseña
AdminSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

// Compara contraseña ingresada con base de datos
AdminSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Exportar modelo
export default model('Admin', AdminSchema);

