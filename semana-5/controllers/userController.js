import  User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secret_key = process.env.SECRET_KEY;

const salt = 10;

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ msg: "OK", data: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error del servidor", data: [] });
    }
}

const setUser = async (req, res) => {
    try {
        const { name, email, legajo, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(404).json({ msg: "El usuario ya existe" });
        }
        const passwordHash = await bcrypt.hash(password, salt);
        const userNew = new User({ name, email, legajo, password: passwordHash });
        userNew.save();
        const id = userNew._id;
        res.status(202).json({ msg: "Usuario guardado", id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error del servidor. No se pudo guardar el usuario", error });
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ msg: "ID no encontrado", data: [] });
        } else {
            res.status(200).json({ msg: "OK", data: user });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error del servidor", error });
    }
} 

const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const status = await User.findByIdAndDelete(id);
        if (status) {
            res.status(200).json({ msg: "Usuario eliminado", data: [] });
        } else {
            return res.status(404).json({ msg: "Usuario no encontrado", data: [] });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error del servidor", error });
    }
}  

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.body;
        const userNew = await User.findByIdAndUpdate(id, user, { new: true });
        if (!userNew) {
            return res.status(404).json({ msg: "ID no encontrado", data: [] });
        } else {
            res.status(200).json({ msg: "OK", data: user });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error del servidor", error });
    }
} 

const auth = async (req, res) => {
    const { email, password } = req.body;
    // Verificamos el mail
    const user = await User.findOne({email});
    if(!user) {
        return res.status(404).json({msg: "El email es invalido"});
    }
    const status = await bcrypt.compare(password, user.password);
    if(!status) {
        return res.status(404).json({msg: "La contraseña es invalida"});
    }

    const data = {
        id: user._id,
        email: user.email,
    }

    // Generamos el token
    const token = jwt.sign(data, secret_key, {expiresIn: "1h"});
    console.log({token});
    res.json({msg: "OK", token: token});
    
    console.log(status);
    return res.status(200).json({msg: "OK"});
}

export {getUsers, setUser, getUserById, deleteUserById, updateUserById, auth};