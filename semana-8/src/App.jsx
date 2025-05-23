import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import ProductsContainer from './components/ProductsContariner';

function App() {

  let logueado = true;
  const products = [
    { id:1, name: 'Celular Samsung', description: 'Celular Dual sim', price: 50000},
    { id:2, name: 'Celular Motorola', description: 'Celular Dual sim', price: 75000},
    { id:3, name: 'Mouse', description: 'Mouse gamer', price: 10000},
  ]

  function saludar() {
    alert('Hola');
  }

  function addToCart(name){
    alert(`Padre, ${name}`);
  }

  return (
    <>
      <Header title="To Do" />
      <button type="button" onClick={saludar} className="btnSaludar">Saludar</button>

      { logueado ? (<h2>Bienvenido</h2>) : (<h2>Visitante</h2>)}

      <p>Otra Forma</p>
      {logueado && <h2>Bienvenido</h2>}

      <p>Rendeirzado de listas</p>
      <ProductsContainer>
      {
        products.map((product) => (
          <Card
            key={product.id}
            add={addToCart}
            name={product.name}
            description={product.description}
            price={product.price} />
        ))
      }
      </ProductsContainer>

    </>
  )
}

export default App
