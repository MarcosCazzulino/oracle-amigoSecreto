// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const ingresoNombres = document.querySelector('#amigo');

if (ingresoNombres.value.trim() === ''){
    alert('Debes ingresar un nombre.');
    ingresoNombres.value = '';
}

