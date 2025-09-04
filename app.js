
let amigos = [];

const ingresoNombres = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const amigoSorteado = document.getElementById('resultado');

// Función que se aplica en caso de que el input esté vacío
function validacion(){
    alert('Debes ingresar un nombre.');
    ingresoNombres.value = '';
}

function actualizarLista(){
    // Acá limpio la ul donde se muestra el amigo sorteado, para poder mostrar una nueva lista
    amigoSorteado.innerHTML = '';

    amigos.push(ingresoNombres.value);
    listaAmigos.innerHTML = '';
    for (let amigo in amigos){
        const liAmigo = document.createElement('li');

        liAmigo.innerHTML = amigos[amigo];
        listaAmigos.appendChild(liAmigo);
    }
}

function agregarAmigo(){
    // Acá agrego la función trim() para que los nombres que sólo son espacios vacíos, tampoco sean válidos
    if (ingresoNombres.value.trim() === ''){
        validacion();
    } else{
        actualizarLista();
    }
    ingresoNombres.value = '';
}

function sortearAmigo(){
    if (amigos.length > 0){
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];

        const liSorteado = document.createElement('li');
        liSorteado.innerHTML = `El amigo secreto es ${amigoSecreto}`;

        amigoSorteado.appendChild(liSorteado);

        // Acá limpio la lista de amigos mostrada en pantalla, una vez que se sortea el amigo secreto
        listaAmigos.innerHTML = '';

        // Finalmente, vacío el array para poder generar una nueva lista
        amigos = [];
    }
}
