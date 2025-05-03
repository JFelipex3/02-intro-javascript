// Funciones en JS

// No se recomienda declarar funciones de está manera, debido a que se puede cambiar
/*
function saludar( nombre ) {
    return `Hola, ${ nombre }`;
}

console.log( saludar ); // Retorna la referencia a la función

saludar = 30;

console.log( saludar ); // Mostrará el valor 30 + warning indicando que se ha hecho una asiganación a una función

*/

// Esta debe ser la forma de declarar una función como constante, al tratar de asignar un valor a saludar indicara un error y la aplicación no funcionará
const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

console.log( saludar('Goku') );

// Función de flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

console.log( saludar2('Vegeta') );

//Versión simplificada de la función anterior
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

console.log( saludar3('Piccolo') );

// Función de flecha sin parametros
const saludar4 = () => `Hola Mundo`;

console.log( saludar4() );


// Función que retorna un objeto
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

console.log( 'Función con return objeto: ', getUser() );

// Función anterior retorna objeto con función de flecha, se le agrega lo que se quiere retornar entre ()
const getUser2 = () => ({
    uid: 'KHJ346',
    username: 'El_Lokotron'
});

console.log( 'Función Flecha que retorna objeto: ', getUser2() );

// Tarea

function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('JFelipex3');
console.log( 'Función con return: ', usuarioActivo );

// 1. Transformar a una función de flecha
// 2. debe retornar un objeto implícito
// 3. Pruebas

const usuarioActivo2 = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

console.log('Función de flecha: ', usuarioActivo2('Juan'));