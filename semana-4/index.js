import express from 'express';
import dotenv from 'dotenv';
import routerAPI from './routers/index.js';

dotenv.config()
const port = process.env.PORT;
const app = express();

// Middleware. Soporte para json.
app.use(express.json());

//Directorio de acceso publico de archivos estaticos
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Iniciando el servidor en el puerto ${port}`);
});

app.get('/', (req, res) => {
  console.log(`Cliente conectado`);
  res.send('<h1>Home</h1>');
});

//Llamamosa routerAPI
routerAPI(app);