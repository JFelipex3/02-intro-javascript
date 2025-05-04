// Promesas
// Las promesas son asincronas, primero se ejecuta todo lo secuencial y al final se ejecutan las promesas
// Crear promesa a la cual se le manda el argumento del heroe que se requiere buscar

import { getHeroeById } from "./08-imp-export";

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject)  => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if ( heroe ){
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }

        }, 2000);
    });
}

// Heroe encontrado
getHeroeByIdAsync(4)
    .then( (heroe) => console.log('Heroe', heroe))
    .catch( (err) => console.warn(err));

// Heroe no encontrado
getHeroeByIdAsync(10)
    .then( (heroe) => console.log('Heroe', heroe))
    .catch( (err) => console.warn(err));

// Si en then y/o catch se usa una función se puede acortar, ejemplo
getHeroeByIdAsync(2)
    .then( console.log) // Toma el argumento del resolve y lo imprime
    .catch( console.warn ); // Toma el argumento indicado en el reject y lo imprime