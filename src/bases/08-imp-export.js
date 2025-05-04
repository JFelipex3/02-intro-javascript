// Importación para exportaciones individuales definidas "export const heroes = [...]"
//import { heroes } from './data/heroes';

// Importacion para exportaciones por defecto casos "export default [...]" o cuando se agrega "export default heroes;" despues de definir.
//import heroes from './data/heroes';

// Importación para exportaciones mixta (individual y usando "export default heroes;")
import heroes, { owners } from '../data/heroes';

// Uso del Find - Retorna solo uno
export const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id );
}
// Otra forma de hacer la función para obtener el valor corresponde a la siguiente
/*
const getHeroeById = ( id ) => heroes.find( (heroe) => heroe.id === id );
*/

//console.log( getHeroeById(2) );

// Uso del Filter - Retorna los que tengan coincidencia
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner.toLowerCase() === owner.toLowerCase() );

/*
console.log( 'Personajes DC. ', getHeroesByOwner('DC'));
console.log( 'Personajes Marvel. ', getHeroesByOwner('Marvel'));
console.log( owners );
*/