import express from "express";
import {getUsers, setUser, getUserById, updateUserById, deleteUserById, auth} from "../controllers/userController.js";
import {validacionToken} from "../middlewares/auth.js";
const router = express.Router();

//Definimos las rutas
router.get("/", validacionToken, getUsers,);
router.get("/:id", getUserById);
router.post("/auth", auth);
router.post("/", setUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);



export default router;