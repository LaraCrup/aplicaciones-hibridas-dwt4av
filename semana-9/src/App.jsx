import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import ProductsContainer from './components/ProductsContariner';
import { useState } from 'react'

function App() {

  const [usuario, setUsuario] = useState({name: 'Juan', age: 30});
  const [products, setProduct] = useState([
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 }
  ]);

  function cambiarNombre() {
    setUsuario({...usuario, name: 'Micaela'});
  }

  function nuevoProducto() {
    const id = products.length + 1;
    const nuevo = {
      id,
      nombre: 'Producto ' + id,
      precio: 100 * id
    };
    setProduct([...products, nuevo]);
  }

  return (
    <>
      <Header title="To Do" />
      <p>Bienvenido {usuario.name}</p>
      <p>Edad: {usuario.age}</p>
      <button onClick={cambiarNombre} type='button'>Cambiar nombre</button>
      <button onClick={nuevoProducto} type='button'>Nuevo producto</button>

      <p>Rendeirzado de listas</p>
      <ProductsContainer>
      {
        products.map((product) => (
          <Card
            key={product.id}
            name={product.nombre}
            price={product.precio} />
        ))
      }
      </ProductsContainer>

    </>
  )
}

export default App