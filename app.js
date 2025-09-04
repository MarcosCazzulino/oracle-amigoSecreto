// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const ingresoNombres = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');

function agregarAmigo(){
    if (ingresoNombres.value.trim() === ''){
        alert('Debes ingresar un nombre.');
        ingresoNombres.value = '';
    } else{
        amigos.push(ingresoNombres.value);
        const liAmigo = document.createElement('li');
        const nombreAmigo = document.createElement('p');

        nombreAmigo.innerHTML = ingresoNombres.value;
        liAmigo.appendChild(nombreAmigo);
        listaAmigos.appendChild(liAmigo);
    }
    console.log(amigos)
    ingresoNombres.value = '';
}