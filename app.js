// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
let amigos = [];
let amigo = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');

//agrego un amigo si el valor no es vacio

function agregarAmigo() {
  //TODO verificar que no sean números ni símbolos raros, ni duplicados
  if(amigo.value != '') {
    amigos.push(amigo.value);
    
    console.log(amigos);
    limpiarCaja();
    agregarLista();
  } else {
    alert('Por favor, inserte un nombre');
  }
  
}

// limpia el input
function limpiarCaja(){
  amigo.value = '';
}

//agrega un nuevo amigo a la lista
let agregarLista = () => {
  lista.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigos[i];
    lista.appendChild(item);
  }
}