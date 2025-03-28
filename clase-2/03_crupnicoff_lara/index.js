const ProductManager = require('./ProductManager.js');

const pm1 = new ProductManager([]);
const producto = {
  id: 1,
  title: 'Mate',
  description: 'Mate para tomar mate',
  price: 1000,
  stock: 1
};
const producto2 = {
  id: 2,
  title: 'Termo',
  description: 'Termo para tomar mate',
  price: 2000,
  stock: 3
}
// pm1.addProduct(producto);
// pm1.addProduct(producto2);

// pm1.saveProducts();
pm1.readProducts();
