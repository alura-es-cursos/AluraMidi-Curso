function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < 9){
   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList[1];

   const idAudio = `#sonido_${instrumento}`;
   console.log(idAudio)

   tecla.onclick = function (){
    playSonido(idAudio);
   }; 
   contador = contador + 1;
   
}