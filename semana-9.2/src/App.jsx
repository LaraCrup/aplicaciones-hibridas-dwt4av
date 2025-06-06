import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'

import Home from './views/Home';
import Products from './views/Products';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/products">Productos</NavLink></li>
          <li><NavLink to="/contact">Contacto</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;