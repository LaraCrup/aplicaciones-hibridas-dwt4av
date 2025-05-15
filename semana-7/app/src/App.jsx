import './App.css'
import foto from '/img/mujer.png'
import calcularEdad from './utils/calcularEdad.jsx'

function App() {
  let name = 'Lucas';
  let nacimiento = 2001;
  let empleado = true;
  let titulo = <h2>Hola Mundo</h2>

  return (
    <>
      <h1 className='color'>Semana 7</h1>
      {titulo}
      <p>Hola {name.toUpperCase()} de {calcularEdad(nacimiento)} anios</p>
      <img src={foto} alt={`Foto de ${name}`} />
    </>
  )

}

export default App
