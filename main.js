function playSonidoPom (){
    document.querySelector('#sonido_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = playSonidoPom; 
listaDeTeclas[1].onclick = playSonidoPom; 
