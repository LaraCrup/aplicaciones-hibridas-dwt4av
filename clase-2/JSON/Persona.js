const fs = require('fs')

class Persona {
  // atributos
  nombre = '';
  apellido = '';
  edad = 0;
  path = './persona.json'
  constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  savePersona(){
    const data = {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
    }
    const dataString = JSON.stringify(data, null, 2)
    fs.writeFile(this.path, dataString, (error) =>{
      if(error){
        return 'Ocurrio un error'
      } else {
        return 'Datos guardados'
      }
    })
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
