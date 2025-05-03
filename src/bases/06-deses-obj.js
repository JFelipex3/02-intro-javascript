// Desestructuración de Objetos o Asignación desestructurante
// Web para verificar concepto: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// Obtiene valores indicados entre llaves, debe corresponder al nombre de la propiedad
// Se puede redefinir el nombre de la variable. ejemplo: { nombre: nombre2 } se debería utilizar nombre2 para mostrar en console.log 
const { nombre, edad, clave } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );

// Desestructurar dentro de función de flecha
const retornaPersona = ( usuario ) => {
    const { nombre, edad, clave } = usuario;
    console.log('Desestructurar dentro de función. nombre:', nombre, ' edad:', edad, 'clave:', clave);
}

retornaPersona(persona);

// Desestructurar en los parametros en función de flecha
const retornaPersona2 = ({ nombre, edad }) => {
    console.log('Desestructurar en parametros de función. nombre:', nombre, ' edad:', edad);
}

retornaPersona2(persona);

// Desestructurar en los parametros con valores por defecto en función de flecha
const retornaPersona3 = ({ nombre, edad, rango = 'Capitán' }) => {
    console.log('Desestructurar en parametros de función. nombre:', nombre, ' edad:', edad, ' rango:', rango);
}

retornaPersona3(persona);

const persona2 = {
    nombre: 'Peter',
    edad: 21,
    clave: 'Spiderman',
    rango: 'Soldado'
}

retornaPersona3(persona2);

// Tarea

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

// Desestructurar retorno de useContext
//const {nombreClave, anios, latlng:{ lat, lng } } = useContext( persona ); // esta forma no es muy común

// Forma común usada
const {nombreClave, anios, latlng} = useContext( persona );
const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);