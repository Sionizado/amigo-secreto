// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
let amigos = [];
let amigo = document.getElementById('amigo');


//agrego un amigo si el valor no es vacio

function agregarAmigo() {
  let nombre = amigo.value;
  if(nombre != '') {
    amigos.push(nombre);
    console.log(amigos);
  } else {
    alert('Por favor, inserte un nombre');
  }
}
