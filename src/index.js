// Operador condicional ternario

const activo = true;

/*
let mensaje = '';

if ( activo ) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo'
}
*/

// este operador realiza la misma acción que el IF anterior.
const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

console.log( mensaje );

// En caso que se quiera ejecutar una acción solo cuando se cumpla una condición
const mensaje2 = activo && 'Activo'; // retorna true

console.log( mensaje2 ); // retorna 'Activo'

const mensaje3 = !activo && 'Activo'; // retorna false

console.log( mensaje3 ); // retorna false