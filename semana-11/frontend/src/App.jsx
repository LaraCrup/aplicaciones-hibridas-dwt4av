import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import {AuthProvider} from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';

import Home from './views/Home';
import Products from './views/Products';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Users from './views/Users';
import UserNew from './views/UserNew';
import UserUpdate from './views/UserUpdate';
import LogIn from './views/LogIn';

import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/products">Productos</NavLink></li>
          <li><NavLink to="/users">ABM de Usuarios</NavLink></li>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/contact">Contacto</NavLink></li>
        </ul>
      </nav>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users' element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }/>
          <Route path='/usernew' element={<UserNew />} />
          <Route path='/userupdate/:id' element={<UserUpdate />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App;