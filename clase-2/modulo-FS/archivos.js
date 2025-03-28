const fs = require('fs');
const path = './data.txt';


//Lectura
const fn = (error, data) => {
  if (error) {
    console.error('Ups');
    // console.log(error);
  }else {
    console.log(data);
  }
}

//Escritura
fs.readFile(path, fn);

const texto = 'Soy un nuevo texto'
fs.writeFile(path, texto, (error) => {
  if(error){
    console.error('Ups, error al guardar archivo');
  } else {
    console.info('Archivo escrito correctamente')
  }
})