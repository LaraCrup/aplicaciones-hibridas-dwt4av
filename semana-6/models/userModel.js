import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true, min: 6},
});

const User = mongoose.model('user', userSchema);

export default User;