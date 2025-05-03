// Objeto literales
const persona = {
  nombre: "Juan",
  apellido: "Peréz",
  edad: 30,
  direccion: {
    ciudad: "Madrid",
    pais: "España",
    zip: 28001,
    lat: 14.3232,
    lng: 34.2323,
  },
};

// Si se agrega {x} se está creando un propiedad x dentro del objeto 
console.log( { persona } );

// Los objetos se pueden imprimir con console.table
console.table( persona );

// Esto copia la referencia de la variable persona, no el objeto en sí (No realizar)
const persona2 = persona;
persona2.nombre = "Pedro";

console.log( "Copia de referencia de la variable" );
console.table( { persona } );
console.table( { persona2 } );

// Para clonar objeto se debe realizar de esta manera
console.log( "Copia de la variable" );
const persona3 = { ...persona };
persona3.nombre = "María";

console.table( { persona3 } );
