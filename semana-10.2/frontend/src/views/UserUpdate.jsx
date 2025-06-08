import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserUpdate() {
    const host = 'http://localhost:3000/api'
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    });
    const { id } = useParams();

    const navigate = useNavigate();

    async function getUserById() {
        try {
            const response = await fetch(`${host}/users/${id}`);
            if (!response.ok) {
                alert('Error al obtener el usuario');
                return
            }
            const { data } = await response.json();
            setUser(data);

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getUserById();
    }, []);

    function handlerChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    async function putUser(e) {
        e.preventDefault();
        console.log(user);
        const opciones = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };

        try {
            const response = await fetch(`${host}/users/${id}`, opciones);

            if (!response.ok) {
                const d = await response.json();
                const { msg } = d
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
            <h2>Actualizar Usuario {id}</h2>
            <form onSubmit={putUser}>
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

export default UserUpdate;