class Persona {
  // atributos
  nombre = '';
  apellido = '';
  edad = 0;
  constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  //metodos
  saludar(){
    return `Hola soy ${this.nombre}`;
  }

  setEdad(edad){
    this.edad = edad;
  }

  getEdad(){
    return this.edad;
  }
}

const p1 = new Persona('Lara', 'Crupnicoff', 21);
// p1.setEdad(24);
// console.log(p1);

//Eso es lo que quiero sacar de este archivo
module.exports = Persona;
