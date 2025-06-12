import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    price: {
        type:Number,
        min: [0, 'El precio no puede ser menor a 0'],
    },
    full: {
        type: Boolean,
        default: false
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria',
        required: [true, 'La categoria es obligatoria']
    }
});

const Product = mongoose.model('product', productsSchema);
export default Product;