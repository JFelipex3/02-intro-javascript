// Async - Await
// Usado para escribir código asincrono, async se ponde delante de la función, esto convierte la función en asíncrona y devuelve automaticamente una promesa
// el await pasua la ejecución de la función hasta uqe una promesa se resuelva, esta solo se puede usar dentro de funciones async.
// El manejo de errores se realiza por Try-Catch

const getImage = async() => {

    try {
        const apiKey = 'JqPQQYfxYvrTvDsWNaQPbWgyUtruUCUz';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await respuesta.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    } catch (error) {
        //manejo del error
        console.error( error );
    }

}

getImage();

/*

peticion
    .then( resp => resp.json() ) // retorno implicito de la promesa
    .then( ({ data }) => { // toma la promesa y obtiene la data con desestructuración
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );
*/