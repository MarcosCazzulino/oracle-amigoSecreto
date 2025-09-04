// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const ingresoNombres = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const amigoSorteado = document.getElementById('resultado');

function validacion(){
    alert('Debes ingresar un nombre.');
    ingresoNombres.value = '';
}

function actualizarLista(){
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
    if (ingresoNombres.value.trim() === ''){
        validacion();
    } else{
        actualizarLista();
    }
    console.log(amigos);
    ingresoNombres.value = '';
}

function sortearAmigo(){
    if (amigos.length > 0){
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(indiceAleatorio)
        const amigoSecreto = amigos[indiceAleatorio];

        const liSorteado = document.createElement('li');
        liSorteado.innerHTML = `El amigo secreto es ${amigoSecreto}`;

        amigoSorteado.appendChild(liSorteado);

        listaAmigos.innerHTML = '';
        amigos = [];
    }
}
