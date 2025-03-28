const Alumno = require('./Alumno.js')
// import { Alumno } from "./Alumno.js";

const os = require('os');
console.log(os.platform());
console.log(os.cpus());


const Alumno1 = new Alumno('Lara', 'Crupnicoff', 21, 'Desarrollo Web', ['Aplicaciones hibridas', 'Etica', 'Clientes web Mobile']);

// console.log(Alumno1);
console.log(Alumno1.mostrarCarrera());
console.log(Alumno1.Nombre());
Alumno1.modificarEdad(24);
console.log(Alumno1.retornarEdad());
Alumno1.agregarMateria('Logica de la programacion');
console.log(Alumno1.mostrarMaterias());