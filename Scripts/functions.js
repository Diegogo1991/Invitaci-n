//FUNCIONES GENERALES TODOS LOS ARCHIVOS
export const funcGene = {
   musicAleatorie,
   fondoAleatorio
}

//FUNCION MUSICA ALEATORIA
var cantidadCanciones = 19;
var indice;
function musicAleatorie() {
   indice = Math.floor(Math.random() * cantidadCanciones);
   let audio = document.getElementById('audio');
   audio.src = `./Musica/${indice}.mp3`;
   console.log("musica ready")
}

function pausarCancion() {
   audio.pause();
}

function reproducirCancion() {
   audio.play();
}

function cambiarCancion() {
   indice++;
   if(indice > 19){
      indice = 0;
   }
   audio.src = `./Musica/${indice}.mp3`;
}
const botonReproducir = document.getElementById('reproducir');
   const botonPausar = document.getElementById('pausar');
   const botonCambiar = document.getElementById('cambiar');

botonPausar.addEventListener('click', pausarCancion);
botonReproducir.addEventListener('click', reproducirCancion);
botonCambiar.addEventListener('click', cambiarCancion);
//COMENTARIOS PLANTILLA LLAMAR A LA FUNCION
//setTimeout(funcGene.musicAleatorie, 1000);
/*document.addEventListener("DOMContentLoaded", function () {
   setTimeout(funcGene.musicAleatorie, 1);
});*/

//FUNCION FONDO ALEATORIO
function fondoAleatorio() {
   var indice = Math.floor(Math.random() * 11);
   var video = document.getElementById('video');
   video.src = `./Videos/${indice}.mp4`;
}

//COMENTARIOS PLANTILLA LLAMAR A LA FUNCION
//setTimeout(funcGene.fondoAleatorio, 1000);
/*document.addEventListener("DOMContentLoaded", function () {
   setTimeout(funcGene.fondoAleatorio, 1);
});*/

//FUNCIONES PARA BUCLES

export const funcBucles = {
   fondoAleatorie,
   cambiarFondo,
   ponerEvi
}

//FUNCION FONDO ALEATORIE (BUCLES)
function fondoAleatorie() {
   var indice = Math.floor(Math.random() * 12);
   var video = document.getElementById('video');
   video.src = `./Videos/FEVDS/${indice}.mp4`;
}

//COMENTARIOS PLANTILLA LLAMAR A LA FUNCION
//setTimeout(fondoAleatorie, 1);
/*document.addEventListener("DOMContentLoaded", function () {
   setTimeout(fondoAleatorie, 1);
});*/

//CAMBIAR FONDOS ALEATORIOS
function cambiarFondo() {
   let maximo = 56;
   var fondo = Math.floor(Math.random() * maximo);
   document.getElementById('fondo').style.background = `url('../Img/EVDS/${fondo}.jpg') center center / cover`;
}

//setTimeout(cambiarFondo, 1);

//PONER EVIDENCIAS
function ponerEvi() {
   let maximoEV = 56;
   var evidencia = Math.floor(Math.random() * maximoEV);
   document.getElementById('fondo').style.background = `url('../Img/EVDS/${evidencia}.jpg') center center / cover`;
}