// Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

/*
console.log( personajes[0]);
console.log( personajes[1]);
console.log( personajes[2]);
*/

// Desestructurar
const [ p1 ] = personajes;
console.log( p1 );

// Desestructurar el segundo valor
const [ , p2 ] = personajes;
console.log( p2 );

// Obtener ambos valores
const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

// Tarea
// 1. El primer valor del arreglo se llamara nombre
// 2. El segundo valor del arreglo se llamara setNombre
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola mundo') }];
} 

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();