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
    body = '<h1>Hola, bienvenidos!</h1>'
    status = 200;
  } else if (url == '/productos') {
    status = 200;
    content = 'application/json';
    admin.getProducts()
      .then(products => {
        body = JSON.stringify(products, null, 2);
        res.writeHead(status, { 'Content-Type': content });
        res.end(body);
      })
      .catch(error => {
        status = 500;
        body = JSON.stringify({ error: 'Error interno del servidor' });
        res.writeHead(status, { 'Content-Type': content });
        res.end(body);
      });
    return;
  } else if (url.startsWith('/productos/')) {
    const id = url.split('/')[2];
    if (id) {
      status = 200;
      content = 'application/json';
      admin.getProductById(id)
        .then(product => {
          body = JSON.stringify(product);
          res.writeHead(status, { 'Content-Type': content });
          res.end(body);
        })
        .catch(error => {
          status = 500;
          body = JSON.stringify({ error: 'Error interno del servidor' });
          res.writeHead(status, { 'Content-Type': content });
          res.end(body);
        });
      return;
    }
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
