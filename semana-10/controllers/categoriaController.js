import Categoria from "../models/categoriaModel.js";

const getCategoria = async( request, response) => {
    try {
        const categorias = await Categoria.find();
        response.status(200).json({ msg: 'ok', data: categorias});
    } catch (error) {
        console.error({error});
        response.status(500).json({msg: 'Error del servidor', data: []});
    }
}

const setCategoria = async( request, response) =>{
    const { name } = request.body;
    if(!name){
        return response.status(400).json({ msg: 'Faltan datos obligatorios' });
    }
    try {
        const nuevaCategoria = new Categoria( {name}); 
        await nuevaCategoria.save();
        const id = nuevaCategoria._id;
   
        response.status(202).json({msg: 'Categoria guardada', id } );
    } catch (error) {
        if (error.name === "ValidationError") {
            const listError = Object.values(error.errors)[0].message
            return res.status(500).json({ errors: error.errors, msg: "Error de validación", errors: listError });
            
        } else {
            console.error(error);
            res.status(500).json({ msg: "Error del servidor. No se pudo guardar el usuario" });
        }
    }
}

const deleteCategoriaById = async(request, response) => {
    try {
        const { id } = request.params
        const status = await Categoria.findByIdAndDelete(id);
        if (status){
            response.status(200).json({ msg: 'Categoria eliminado', data: []});
        } else {
            response.status(404).json({ msg: 'No se econtro la categoria', data: []});
        }
    } catch (error) {
        console.error({error});
        response.status(500).json({msg: 'Error del servidor', data: []});
    }
}


export { getCategoria, setCategoria, deleteCategoriaById };