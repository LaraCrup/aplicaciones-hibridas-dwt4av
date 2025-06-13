import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Alert.css';

function UserNew() {
    const host = 'http://localhost:3000/api'
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    });
    const [msg, setMsg] = useState({ text: '', type: '' });
    const navigate = useNavigate();

    function handlerChange(e) {
        const value = e.target.value;
        const key = e.target.name;
        setUser({
            ...user,
            [key]: value
        });
        setMsg({ ...msg, text: '', type: '' });
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

        if (user.name.trim() === '') {
            setMsg({ ...msg, text: 'El nombre es obligatorio', type: 'error' });
            return;
        }

        if (user.name.trim().length < 3) {
            setMsg({ ...msg, text: 'El nombre debe tener al menos 3 caracteres', type: 'error' });
            return;
        }

        if (!user.email.trim().includes('@')) {
            setMsg({ ...msg, text: 'El formato de email es invalido', type: 'error' });
            return;
        }

        if (user.password.trim().length < 3) {
            setMsg({ ...msg, text: 'La contraseña debe tener al menos 3 caracteres', type: 'error' });
            return;
        }

        try {
            const response = await fetch(`${host}/users`, opciones);

            if (!response.ok) {
                const d = await response.json();
                const { msg } = d
                alert('Error al guardar el usuario:', msg);
                setMsg({ ...msg, text: msg});
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
            {msg.text ? <h4></h4> : <h4 className={`alert + msg.type}`}>{msg.text}</h4>}
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