import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserNew() {
    const host = 'http://localhost:3000/api'
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    function handlerChange(e) {
        const value = e.target.value;
        const key = e.target.name;
        setUser({
            ...user,
            [key]: value
        });
    }

    async function postUser(e) {
        e.preventDefault();
        console.log(user);
        const opciones = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };

        try {
            const response = await fetch(`${host}/users`, opciones);

            if (!response.ok) {
                const d = await response.json();
                const {msg} = d
                alert('Error al guardar el usuario:', msg);
                return
            }


            const data = await response.json();
            setUser({ ...user, name: '', email: '', password: '' });

            navigate('/users');
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
            <h2>Crear Usuario</h2>
            <form onSubmit={postUser}>
                <label htmlFor="name">Nombre</label>
                <input name='name' value={user.name} type="text" onChange={handlerChange} />

                <label htmlFor="email">Email</label>
                <input name='email' value={user.email} type="text" onChange={handlerChange} />

                <label htmlFor="password">Contrasena</label>
                <input name='password' value={user.password} type="text" onChange={handlerChange} />

                <button type='submit'>Guardar</button>
            </form>
        </>
    );
}

export default UserNew;