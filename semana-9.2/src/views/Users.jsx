import { useState, useEffect } from 'react'

function Users() {
    const host = 'http://localhost:3000/api'
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    });

    async function getUsers() {
        try {
            const response = await fetch(`${host}/users`);
            if (!response.ok) {
                alert('Error al obtener los usuarios');
                return
            }
            const { data } = await response.json();
            setUsers(data);

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getUsers();
    }, []);

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
                alert('Error al guardar el usuario');
                return
            }
            const data = await response.json();
            setUser({...user, name: '', email: '', password: ''});
            getUsers();
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
            <h2>Lista de Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={postUser}>
                <label htmlFor="name">Nombre</label>
                <input value={user.name} type="text" onChange={(e) => setUser({ ...user, name: e.target.value })} />

                <label htmlFor="email">Email</label>
                <input value={user.email} type="text" onChange={(e) => setUser({ ...user, email: e.target.value })} />

                <label htmlFor="password">Contrasena</label>
                <input value={user.password} type="text" onChange={(e) => setUser({ ...user, password: e.target.value })} />

                <button type='submit'>Guardar</button>
            </form>
        </>
    );
}

export default Users;