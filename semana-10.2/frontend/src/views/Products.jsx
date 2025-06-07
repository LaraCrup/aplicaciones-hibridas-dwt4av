import { useState } from 'react'

function Products() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: ''
    });

    const [products, setProducts] = useState(() => {
        console.log('Inicializando productos');
        const list = readLocal();
        return list;
    });

    function saveLocal(list) {
        localStorage.setItem('products', JSON.stringify(list));
    }

    function readLocal() {
        const data = JSON.parse(localStorage.getItem('products'));
        return data ? data : [];
    }

    function nuevoProducto(event) {
        event.preventDefault();
        const id = products.length + 1;
        const name = product.name
        const description = product.description
        const price = product.price
        const nuevo = { id, name, price, description };
        setProducts([...products, nuevo]);
        saveLocal([...products, nuevo]);
        setProduct({ name: '', price: '', description: '' });
    }

    return (
        <>
            <h2>Productos</h2>
            <form onSubmit={nuevoProducto}>
                <label htmlFor="">Nombre</label>
                <input type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} placeholder='Nombre' />
                <label htmlFor="">Precio</label>
                <input type="number" value={product.price} placeholder='$' onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                <label htmlFor="">Descripcion</label>
                <input type="text" value={product.description} placeholder='Detalle' onChange={(e) => setProduct({ ...product, description: e.target.value })} />
                <button type='submit'>Guardar</button>
            </form>
            <div className='productsContainer'>
                <div className='card'>
                    {products.map(product => (
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                            <p>Precio: {product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Products;