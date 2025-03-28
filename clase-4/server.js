const { ProductManager } = require('./ProductManager.js');
const http = require('http');

const port = 3000;
let clientes = 0;

const admin = new ProductManager();

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  let status = 200;
  let body = '';
  let content = 'text/html';
  console.log(`URL: ${url} - Method: ${method}`);

  if (url == '/') {
    body = '<h1>Hola desde NodeJS - Servidor</h1>'
    status = 200;
  } else if (url == '/productos') {
    status = 200;
    content = 'application/json';
    const data = { name: 'Tv', price: 1000 };
    body += JSON.stringify(data);
  } else if (url == '/contacto') {
    status = 200;
    body = '<h1>Formulario de Contacto</h1>'
  } else {
    status = 404;
    body = '<h1>Error 404 - Pagina no encontrada</h1>';
  }

  res.writeHead(status, { 'Content-Type': content });
  res.end(body);
  console.log(`Clientes conectados: ${clientes}`);
  clientes++;
}
);

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}/`);
});
