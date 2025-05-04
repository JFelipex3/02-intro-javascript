// Fetch API - Libreria para hacer peticiones HTTP sin importar una librería, se pueden usar otras.
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const apiKey = 'JqPQQYfxYvrTvDsWNaQPbWgyUtruUCUz';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() ) // retorno implicito de la promesa
    .then( ({ data }) => { // toma la promesa y obtiene la data con desestructuración
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );