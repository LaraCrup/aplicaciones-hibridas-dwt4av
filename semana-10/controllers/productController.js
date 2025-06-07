import Product from "../models/productModel.js";

const getProducts = async( request, response) => {
    try {
        const { full=null, max } = request.query;
        let products;
        if( full){
            products = await Product.find({full});
        } else {
            // Aca deberia verificar que la categoria exista
            products = await Product.find().populate('categoria');
        }
     
        response.status(200).json({ msg: 'ok', data: products});

    } catch (error) {
        console.error({error});
        response.status(500).json({msg: 'Error del servidor', data: []});
    }
}

const getProductById = async( request, response) => {
    try {
        const { id } = request.params
        const product = await Product.findById(id);
        if (product){
            response.status(200).json({ msg: 'ok', data: product});
        } else {
            response.status(404).json({ msg: 'No se econtro el Producto', data: {}});
        }
    } catch (error) {
        console.error({error});
        response.status(500).json({msg: 'Error del servidor', data: []});
    }
}

const setProduct = async( request, response) =>{
    const { name, price, full, categoriaId } = request.body;
    if(!name || !price || !categoriaId) {
        return response.status(400).json({ msg: 'Faltan datos obligatorios' });
    }
    try {
        const productNew = new Product( {name, price, full, categoria: categoriaId}); 
        await productNew.save();
        const id = productNew._id;
   
        response.status(202).json({msg: 'Producto guardado', id } );
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

const deleteProductById = async(request, response) => {
    try {
        const { id } = request.params
        const status = await Product.findByIdAndDelete(id);
        if (status){
            response.status(200).json({ msg: 'Producto eliminado', data: []});
        } else {
            response.status(404).json({ msg: 'No se econtro el Producto', data: []});
        }
    } catch (error) {
        console.error({error});
        response.status(500).json({msg: 'Error del servidor', data: []});
    }
}


export { getProducts, getProductById, setProduct, deleteProductById };