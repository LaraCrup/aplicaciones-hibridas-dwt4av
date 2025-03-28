class ProductManager {
  constructor(products = []) {
    this.products = products;
  }

  addProduct(product) {
    if (!product.id || !product.title || !product.description || !product.price || !product.stock) {
      console.log('Debes completar todos los campos del producto');
      return;
    }

    const exists = this.products.some(p => p.id === product.id);
    if (exists) {
      console.log('Ya existe un producto con ese ID');
    } else {
      this.products.push(product);
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const search = this.products.find(p => p.id === id);
    if (search) {
      return search;
    } else {
      console.error('Not Found');
      
    }
  }
}

module.exports = ProductManager;
