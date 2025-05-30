import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [16, 'El nombre no puede tener más de 16 caracteres']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
    },
    password: {
        type: String, 
        required: [true, 'El password es obligatorio'],
        minlength: 3},
});

const User = mongoose.model('user', userSchema);

export default User;