// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
let amigos = [];
let amigo = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let ganador = document.getElementById('resultado');

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

//sortear un amigo

let sortearAmigo = () => {
  if(amigos.length == 0){
    alert('No hay amigos para sortear');
  };
  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];
  ganador.innerHTML = amigoSorteado;
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
    lista.appendChild(nuevoAmigo);
  }
}