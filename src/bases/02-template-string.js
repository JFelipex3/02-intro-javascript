const nombre = 'Jhonnatan';
const apellido = 'Machuca';

const nombreCompleto = nombre + ' ' + apellido;

// Concatenar con template string
let nombreCompletoTemplate = `${nombre} ${apellido}`;

console.log("Concatenación con (+) : ", nombreCompleto);
console.log("Concatenación con template string: ", nombreCompletoTemplate);

let nombreCompletoTemplateSalto = `
${nombre} 
${apellido} 
${1 + 1}
`;

console.log("Concatenación con template string y salto línea: ", nombreCompletoTemplateSalto);

function getSaludo(nombre) {
    return 'Hola Mundo ' + nombre;
}

// Concatenar con template string y función
console.log(`El saludo es: ${getSaludo(nombre)}`);
