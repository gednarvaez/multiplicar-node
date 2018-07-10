
const { crearArchivo } = require("./multiplicar/multiplicar");
const argv = require("yargs")
.command("listar", "Imprime en consola la tabla de multplicar",{
  base:{
    demand: true,
    alias: 'b'
  },
  limite:{
    alias: 'l',
    default: 10
  }
})
.argv;









let argv2 = process.argv;
console.log(argv.limite);

// // let parametro = argV[2];
// // let base = parametro.split("=")[1]; 
// console.log(base);



// crearArchivo(base)
// .then(archivo => console.log(`Archivo creado ${archivo}`))
// .catch(e => console.log(e));