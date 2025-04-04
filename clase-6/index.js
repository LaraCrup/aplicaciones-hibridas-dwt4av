import express, { response } from 'express';
import UserManager from './UserManager.js';

const port = 5000;
const app = express();
app.use(express.json());
const admUser = new UserManager();

app.get('/', (req, res) => {
  console.log(`Cliente conectado`);
  res.send('Hola desde Express');
});

const getUsers = async (req, res) => {
  console.log('GET Users');
  const users = await admUser.getUsers();
  res.json({ msg: 'OK', data: users });
}

//Rutas de la API
app.get('/api/users', getUsers)

app.get('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await admUser.getUserById(id);
  if (!user) {
    return res.status(404).json({ msg: 'ID no encontrado', data: [] });
  } else {
    res.json({ msg: 'OK', data: [user] });
  }
})

app.post('/api/users', async (req, res) => {
  try {
    const user = req.body;
    const id = await admUser.setUser(user)
    res.status(200).json({ msg: 'Usuario guardado', data: {id} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error del servidor. No se pudo guardar el usuario', error });
  }
})

app.delete('/api/users/:id', async (req, res) => {
  const {id} = req.params;
  const status = await admUser.deleteUserById(id);
  if (status) {
    res.json({ msg: 'Usuario eliminado', data: [] });
  } else {
    return res.status(404).json({ msg: 'Usuario no encontrado', data: [] });
  }
})

app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const status = await admUser.updateUserById(id, user);
  if (status) {
    res.json({ msg: 'Usuario actualizado', data: [] });
  } else {
    return res.status(404).json({ msg: 'Usuario no encontrado para actualizar', data: [] });
  }
})

app.listen(port, () => {
  console.log(`Iniciando el servidor en el puerto ${port}`);
});