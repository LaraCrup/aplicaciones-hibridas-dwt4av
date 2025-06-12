import express from "express";
import { getCategoria, setCategoria, deleteCategoriaById } from "../controllers/categoriaController.js";

import { validacionToken } from "../middlewares/auth.js";   


const router = express.Router();

// Definimos las rutas
router.get('/', getCategoria);
router.post('/', setCategoria);
router.delete('/:id', deleteCategoriaById);

export default router;