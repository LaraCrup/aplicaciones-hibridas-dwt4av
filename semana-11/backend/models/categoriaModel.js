import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la categoria es obligatorio']
    }
});

const Categoria = mongoose.model('categoria', categoriaSchema);
export default Categoria;