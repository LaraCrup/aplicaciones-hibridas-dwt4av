const fs = require('fs')

class ProductManager {
  path = './productos.json'
  constructor(products = []) {
    this.products = products;
  }

  randomID(){
    return crypto.randomUUID();
  }

  async getProducts() {
    try {
      const data = await fs.readFile(path, 'utf8');
      this.products = JSON.parse(data);
    } catch (error) {
      console.error('No pudimos guardar el archvio');
      
    }
  }

  async setProduct(product){
    try {
      await this.getProducts();
      product.id = this.randomID();
      this.products.push(products);
      const data = JSON.stringify(this.products, null, 2);
      await fs.writeFile(path, data);
      return product.id;
    } catch (error) {
      console.error('No pudimos guardar el archivo');
      
    }

  }

  async getProductById(id) {
    await this.getProducts();
    const product = this.products.find(item => item.id == id);
    return prodct ? product : {};
  }
}

module.exports = ProductManager;
