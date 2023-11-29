/*window.alert('Puedes perder algo si no abres los ojos antes de que sea tarde');*/
//prompt("Puedes perder algo si no abres los ojos antes de que sea tarde. Ingrese una fecha ?/?/23");
window.alert('Ya se está alistando la actualización, espero verte mañana por aquí. - 8 p.m.');

//IMPORTE DE FUNCIONES
import { funcGene } from "./Scripts/functions.js";

//COLOCAR VIDEO ALEATORIO
setTimeout(funcGene.fondoAleatorio, 1);

//COLOCAR MUSICA ALEATORIO
/*document.addEventListener("DOMContentLoaded", () => {
   console.log("funcionando"),
      setTimeout(funcGene.musicAleatorie, 1000);
});
setTimeout(funcGene.musicAleatorie, 1000);*/

document.addEventListener("DOMContentLoaded", function () {
   const audio = document.getElementById('audio');
   let primeraReproduccion = true;

   function musicAleatorie() {
       let indice = Math.floor(Math.random() * 19);
       audio.src = `./Musica/${indice}.mp3`;
       console.log("Música lista");
   }

   function reproducirAudio() {
       if (primeraReproduccion) {
           musicAleatorie();
           audio.play().catch(error => {
               console.error('Error al reproducir audio:', error);
           });
           primeraReproduccion = false;
           // Desvincula el event listener después de la primera reproducción
           document.body.removeEventListener('click', reproducirAudio);
       }
   }

   // Vincula la función a cualquier clic en el body
   document.body.addEventListener('click', reproducirAudio);
});




const typed = new Typed('.typed', {
   strings: ['INVITACIÓN <br> CUARTA REVOLUCIÓN <BR> INDUSTRIAL'],
   typeSpeed: 75,
   cursorChar: '',
   loop: false
});

const HayNove = new Typed('.aviso', {
   strings: ['¿Cuál es el impacto multifacético de lo digital?'],
   typeSpeed: 102,
   cursorChar: '',
   loop: true
});

/*const novedadesContent = new Typed('.HayNovedas', {
    stringsElement: '#novedades',
    typeSpeed: 75,
    cursorChar: '',
    loop: false
});*/

/*function quitarNoved() {
    document.getElementById('novedades').style.display = 'none';
}*/

var pistas;
function mostrarNovedades() {
   console.log("funciona");
   /*let aviso = document.getElementById('novedades');
   aviso.style.display = 'flex';
   setTimeout(() => { aviso.style.display = 'none'; }, 5000);*/
   var contend = document.getElementById('ocultarnovedades');
   var novedades = document.createElement('div');
   novedades.classList.add('hayNovedad');
   novedades.setAttribute('id', 'novedades');
   contend.appendChild(novedades);
   avisoNov.removeEventListener('click', mostrarNovedades);
   avisoJuego.removeEventListener('click', infoJuego);

   setTimeout(() => {
      pistas = new Typed('.hayNovedad', {
         strings: [' · Lugar: El salón. <br>· Fecha: 5 de diciembre <br>· Hora: 10:15 a.m. <br>· Los OJOS pueden hablar.'],
         typeSpeed: 30,
         cursorChar: '',
         loop: false,
         onComplete: () => {
            setTimeout(() => {
               var contend = document.getElementById('ocultarnovedades');
               var novedades = document.getElementById('novedades');
               contend.removeChild(novedades);
               avisoNov.addEventListener('click', mostrarNovedades);
               avisoJuego.addEventListener('click', infoJuego);
            }, 4000)
         }
      })
   }, 1000)

   
}

/*function ocultarNovedades() {
    document.getElementById('novedades').style.display = 'none';
}*/

var avisoNov = document.getElementById('aviso');
avisoNov.addEventListener('click', mostrarNovedades);

/*let ocultNov = document.getElementById('novedades');
ocultNov.addEventListener('click', ocultarNovedades);*/

/*let ocultNoved = document.getElementById('ocultarnovedades');
ocultNoved.addEventListener('click', ocultarNovedades)*/

//FUNCIONES BOTONES
//BOTON UNO
var botonuno = document.getElementById('boton1');
botonuno.addEventListener('click', () => {
   window.location.replace('https://youtu.be/z3TJPyHqadY?si=NBADVz1DGwX3ivL9');
});

//BOTON DOS
var botondos = document.getElementById('boton3');
botondos.addEventListener('click', () => {
   window.open('https://www.youtube.com/watch?v=1Q76EGUcvRY&list=PLSGlwi2i3KJbPzGiiblXIxLW9zh6jiW8e&index=1&ab_channel=UniversidadCES');
});


//FUNCION ALTERNAR TEXTO
document.addEventListener("DOMContentLoaded", function () {
   const boton = document.getElementById("boton2");
   let alternar = true;

   function cambiarContenidoBoton() {
       // Utiliza el operador ternario para simplificar el código
       boton.classList.add("transicion"); // Agrega la clase de transición
       boton.innerHTML = alternar ? '<i class="fa-solid fa-circle-play"></i>' : 'Play';

       // Utiliza setTimeout para eliminar la clase después de la transición
       setTimeout(function () {
           boton.classList.remove("transicion");
       }, 300);
       
       alternar = !alternar;
   }

   // Utiliza una función arrow en lugar de una función anónima
   setInterval(cambiarContenidoBoton, 3000);
});

//FUNCION AVISO DEL JUEGO
function infoJuego() {
   console.log("funciona");
   /*let aviso = document.getElementById('novedades');
   aviso.style.display = 'flex';
   setTimeout(() => { aviso.style.display = 'none'; }, 5000);*/
   var contend = document.getElementById('ocultarnovedades');
   var novedades = document.createElement('div');
   novedades.classList.add('hayNovedad');
   novedades.setAttribute('id', 'novedades');
   contend.appendChild(novedades);
   avisoNov.removeEventListener('click', mostrarNovedades);
   avisoJuego.removeEventListener('click', infoJuego);

   setTimeout(() => {
      pistas = new Typed('.hayNovedad', {
         strings: [' · Ten en cuenta:. <br>· Hay cosas que no ves, pero están por ahí. <br>· Esto apenas comienza y debes tratar de entender. <br>· Registra lo que creas pueda servir, cada día habrán cambios.'],
         typeSpeed: 30,
         cursorChar: '',
         loop: false,
         onComplete: () => {
            setTimeout(() => {
               var contend = document.getElementById('ocultarnovedades');
               var novedades = document.getElementById('novedades');
               contend.removeChild(novedades);
               avisoNov.addEventListener('click', mostrarNovedades);
               avisoJuego.addEventListener('click', infoJuego);
            }, 4000)
            setTimeout(() => {
               window.location.href = "./Bucle1.html";
            }, 4500)
         }
      })
   }, 1000)  
}

var avisoJuego = document.getElementById('boton2');
avisoJuego.addEventListener('click', infoJuego);


