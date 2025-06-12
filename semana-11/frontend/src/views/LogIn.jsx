import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function LogIn() {
    const host = 'http://localhost:3000/api'
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    function handlerForm(e) {
        e.preventDefault();
        loginUser();
    }

    function handlerChange(e) {
        const value = e.target.value;
        const key = e.target.name;
        setUser({
            ...user,
            [key]: value
        });
    }

    async function loginUser() {
        const opciones = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };

        try {
            const response = await fetch(`${host}/auth`, opciones);

            if (!response.ok) {
                // Check if response is JSON before parsing
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const d = await response.json();
                    const {msg} = d;
                    alert('Error al loggear el usuario:', msg);
                } else {
                    alert(`Error: ${response.status} - ${response.statusText}`);
                }
                return;
            }

            const data = await response.json();

            if (data.token) {
                login('user', data.token);
                alert('Usuario loggeado correctamente');
            }

            navigate('/users');
        } catch (error) {
            console.error(error);
            alert('Error de conexión: ' + error.message);
        }
    }


    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handlerForm}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handlerChange}
                    required
                />
                <label htmlFor="password">Contra</label>
                <input
                    type="password"
                    name='password'
                    value={user.password}
                    onChange={handlerChange}
                    required />
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}

export default LogIn;