import './App.css'
import foto from '/img/mujer.png'
import calcularEdad from './utils/calcularEdad.jsx'
import Card from './components/Card.jsx'
import ProductContainer from './components/ProductContainer.jsx'

function App() {
  let name = 'Lucas';
  let nacimiento = 2001;
  let empleado = true;
  let titulo = <h2>Hola Mundo</h2>

  return (
    <>
      <h1 className='color'>Semana 7</h1>
      <ProductContainer>
      <Card name="Mouse Logitech" price={25000} description="Mouse inalambrico Logitech Pebble M350 grafito" image="https://http2.mlstatic.com/D_NQ_NP_2X_918596-MLA43269505376_082020-F.webp" visible={true}/>
      <Card name="Teclado Redragon" price={23000} description="Teclado Redragon Horus TKL Black" image="https://mundofixar.vtexassets.com/arquivos/ids/2678842-1200-auto?v=638822332358530000&width=1200&height=auto&aspect=true" visible={false}/>
      {titulo}
      <p>Hola {name.toUpperCase()} de {calcularEdad(nacimiento)} anios</p>
      <img src={foto} alt={`Foto de ${name}`} />
      </ProductContainer>
    </>
  )

}

export default App
