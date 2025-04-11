import UserManager from "../models/UserManager.js";

const userModel = new UserManager();

const getUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.status(200).json({ msg: "OK", data: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error del servidor", data: [] });
    }
}

const setUser = async (req, res) => {
    try {
        const user = req.body;
        const id = await userModel.setUser(user);
        res.status(202).json({ msg: "Usuario guardado", data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error del servidor. No se pudo guardar el usuario", error });
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.getUserById(id);
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
        const status = await userModel.deleteUserById(id);
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
        const id = req.params.id;
        const user = req.body;
        const status = await userModel.updateUserById(id, user);
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

export {getUsers, setUser, getUserById, deleteUserById, updateUserById};