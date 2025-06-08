import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Users() {
    const host = 'http://localhost:3000/api'
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

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

    async function deleteUser(id) {
        const opciones = {
            method: 'DELETE',
        };

        try {
            const response = await fetch(`${host}/users/${id}`, opciones);

            if (!response.ok) {
                alert('Error al eliminar el usuario');
                return
            }
            const data = await response.json();
            alert(data.message);
            getUsers();
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
            <h2>ABM de Usuarios</h2>
            <input type="search" />
            <button type='button' onClick={() => {navigate('/usernew')}}>Nuevo Usuario</button>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th colSpan={2}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button type='button' onClick={() => {navigate(`/userupdate/${user._id}`)}}>E</button>
                            </td>
                            <td>
                                <button type='button' onClick={() => {deleteUser(user._id)}}>D</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Users;