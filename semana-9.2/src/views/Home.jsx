import { useState } from 'react'

function Home() {
    const [usuario, setUsuario] = useState({ name: 'Juan', age: 30 });

    function cambiarNombre() {
        setUsuario({ ...usuario, name: 'Micaela' });
    }

    return (
        <>
            <h2>Inicio</h2>
            <p>Bienvenido {usuario.name}</p>
            <p>Edad: {usuario.age}</p>
            <button onClick={cambiarNombre} type='button'>Cambiar nombre</button>
        </>
    );
}

export default Home;