// Promesas
// Las promesas son asincronas, primero se ejecuta todo lo secuencial y al final se ejecutan las promesas

import { getHeroeById } from "./08-imp-export";

// resolve se ejecuta cuando todo está OK y el reject cuando falla
const promesa = new Promise( (resolve, reject)  => {
    setTimeout( () => {
        const heroe = getHeroeById(2);
        resolve(heroe); // ejecuta el then de la promesa y entrega el parametro de heroe
        //reject('No se pudo encontrar el héroe') // Ejecuta el catch de la promesa y entrega el string del mensaje
    }, 2000);
});

promesa.then( (heroe) => {
    console.log('Heroe', heroe);
})
.catch( err => console.warn( err ));