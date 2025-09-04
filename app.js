// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const ingresoNombres = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');

function validacion(){
    if (ingresoNombres.value.trim() === ''){
        alert('Debes ingresar un nombre.');
        ingresoNombres.value = '';
    }
}

function actualizarLista(){
    amigos.push(ingresoNombres.value);
    listaAmigos.innerHTML = ''
    for (let amigo in amigos){
        const liAmigo = document.createElement('li');
        
        liAmigo.innerHTML = amigos[amigo];
        listaAmigos.appendChild(liAmigo);
    }
}

function agregarAmigo(){
    validacion();
    actualizarLista()
    console.log(amigos)
    ingresoNombres.value = '';
}