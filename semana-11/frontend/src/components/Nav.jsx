import { NavLink } from 'react-router-dom'
import { AuthProvider, AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


function Nav() {
    const { logout } = useContext(AuthContext);
    return(
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/products">Productos</NavLink></li>
          <li><NavLink to="/users">ABM de Usuarios</NavLink></li>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/contact">Contacto</NavLink></li>
          <li><button onClick={logout} href="#">Logout</button></li>
        </ul>
      </nav>
    )
}

export default Nav;