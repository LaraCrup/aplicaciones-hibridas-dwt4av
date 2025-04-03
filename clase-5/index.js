import chalk from 'chalk';
import express, { response } from 'express';

const port = 5000;
const app = express();
let count = 0;

const users = [
  { id: 1, name: 'Juan' },
  { id: 2, name: 'Pedro' },
  { id: 3, name: 'Maria' },
]

app.get('/', (req, res) => {
  count++;
  console.log(`Cliente ${count} conectado`);
  res.send('Hola desde Express');
});

const getUsers = (req, res) => {
  console.log('GET Users');
  res.json(users);
}

//Rutas de la API
app.get('/api/users', getUsers)

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = users.find(user => user.id == id);
  res.json(user);
})

app.listen(port, () => {
  console.log(chalk.blue(`Iniciando el servidor en el puerto ${port}`));
});