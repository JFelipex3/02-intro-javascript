// Variables y Constantes

// Constantes: Valores que no cambian
const nombre = 'Jhonnatan'; 
const apellido = 'Machuca';

// Variables: Valores que pueden cambiar (let). no se debe usar el var porque conlleva a errores.
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Se puede la variables porque son parte del scope y solo existen dentro del proceso
if ( true ) {
  let valorDado = 6;
  console.log(valorDado);
}

console.log(valorDado);