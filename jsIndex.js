/*window.alert('Puedes perder algo si no abres los ojos antes de que sea tarde');*/
//prompt("Puedes perder algo si no abres los ojos antes de que sea tarde. Ingrese una fecha ?/?/23");

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

var cantidadCanciones = 19;

document.addEventListener("DOMContentLoaded", function () {
   const audio = document.getElementById('audio');
   let primeraReproduccion = true;

   const botonReproducir = document.getElementById('reproducir');
   const botonPausar = document.getElementById('pausar');
   const botonCambiar = document.getElementById('cambiar');

   let indice = Math.floor(Math.random() * cantidadCanciones);

   function musicAleatorie() {
       audio.src = `./Musica/${indice}.mp3`;
       console.log("Música lista");
   }

   function reproducirAudioAleatorio() {
       if (primeraReproduccion) {
           musicAleatorie();
           audio.play().catch(error => {
               console.error('Error al reproducir audio:', error);
           });
           primeraReproduccion = false;
           // Desvincula el event listener después de la primera reproducción
           document.body.removeEventListener('click', reproducirAudioAleatorio);
       }
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

   botonPausar.addEventListener('click', pausarCancion);
   botonReproducir.addEventListener('click', reproducirCancion);
   botonCambiar.addEventListener('click', cambiarCancion);
   // Vincula la función a cualquier clic en el body
   //document.body.addEventListener('click', reproducirAudioAleatorio);

   // window.alert('Tercer y penúltimo bucle listo. ¿El lunes habrá ganador?');
   document.addEventListener('click', reproducirAudioAleatorio);
   document.addEventListener('keydown', reproducirAudioAleatorio);
   document.addEventListener('touchstart', reproducirAudioAleatorio);
   document.addEventListener('mousemove', reproducirAudioAleatorio);
});

/*setTimeout(() => {
   window.alert('Ya se subió la segunda parte.');
}, 1000);*/


const typed = new Typed('.typed', {
   strings: ['INVITACIÓN <br> NAUGES DREAMS'],
   typeSpeed: 75,
   cursorChar: '|',
   loop: false
});

const HayNove = new Typed('.aviso', {
   strings: ['¿Qué va a pasar con esta página?'],
   typeSpeed: 102,
   cursorChar: '',
   loop: true
});



/*let ocultNov = document.getElementById('novedades');
ocultNov.addEventListener('click', ocultarNovedades);*/

/*let ocultNoved = document.getElementById('ocultarnovedades');
ocultNoved.addEventListener('click', ocultarNovedades)*/

//FUNCIONES BOTONES OJOS
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
   setInterval(cambiarContenidoBoton, 1500);
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
   novedades.setAttribute('id', 'inforjuego');
   contend.appendChild(novedades);
   avisoNov.removeEventListener('click', mostrarNovedades);
   avisoJuego.removeEventListener('click', infoJuego);

   setTimeout(() => {
      pistas = new Typed('.hayNovedad', {
         strings: [' · Ten en cuenta: <br>· Esto va a cambiar, es mejor que no vuelvas. <br>· Debes tratar de entender. <br>· Quiero confesar muchas cosas.'],
         typeSpeed: 30,
         cursorChar: '',
         loop: false,
         onComplete: () => {
            setTimeout(() => {
               var contend = document.getElementById('ocultarnovedades');
               var novedades = document.getElementById('inforjuego');
               contend.removeChild(novedades);
               
               /* avisoJuego.addEventListener('click', infoJuego); */
            }, 2000)
            /* setTimeout(() => {
               window.location.href = "./Bucle1.html";
            }, 2500); */
            setTimeout( () => {
               // Crear el div flotante
               var floatingDiv = document.createElement('div');
               floatingDiv.classList.add('floating-buttons');

               // Crear botón Easy
               var buttonEasy = document.createElement('div');
               buttonEasy.setAttribute('id', 'botonEasy');
               buttonEasy.innerText = 'Easy';
               buttonEasy.addEventListener('click', function () {
                   // Acciones para el botón Easy
                   window.location.replace('./Bucle1.html'); // Reemplaza con la URL o acción deseada
               });

               // Crear botón Hard
               var buttonHard = document.createElement('div');
               buttonHard.setAttribute('id', 'botonHard');
               buttonHard.innerText = 'Hard';
               buttonHard.addEventListener('click', function () {
                   // Acciones para el botón Hard
                   /* window.location.href = "./Hard.html"; // Reemplaza con la URL o acción deseada */
                   window.alert('El modo HARD estará disponible después y serán las confesiones.');
               });

               // Agregar botones al div flotante
               floatingDiv.appendChild(buttonEasy);
               floatingDiv.appendChild(buttonHard);

               // Agregar el div flotante al cuerpo del documento
               document.body.appendChild(floatingDiv);

               // Agregar event listener para cerrar el div al hacer clic fuera de él
               document.addEventListener('click', closeFloatingDiv);

               // Agregar event listener al botón avisoJuego
               avisoNov.addEventListener('click', mostrarNovedades);
               avisoJuego.addEventListener('click', infoJuego);
            }, 2300)
         }
      })
   }, 500)  
}

function closeFloatingDiv(event) {
   var floatingDiv = document.querySelector('.floating-buttons');
   if (floatingDiv && !floatingDiv.contains(event.target)) {
       // Si se hizo clic fuera del div flotante, eliminarlo
       floatingDiv.parentNode.removeChild(floatingDiv);

       // Volver a añadir la función al botón avisoJuego
       

       // Eliminar el event listener para cerrar el div
       document.removeEventListener('click', closeFloatingDiv);
   }
}

var avisoJuego = document.getElementById('boton2');
avisoJuego.addEventListener('click', infoJuego);

//FUNCIÓN MOSTRAR NOVEDADES
var pistas;
function mostrarNovedades() {
   avisoJuego.removeEventListener('click', infoJuego);
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

   setTimeout(() => {
      pistas = new Typed('.hayNovedad', {
         strings: [' · naugesdreams.netlify.app <br>· Fecha: No sé aún <br>· Los OJOS pueden hablar.'],
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
            }, 2000)
         }
      })
   }, 1000)
}

var avisoNov = document.getElementById('aviso');
avisoNov.addEventListener('click', mostrarNovedades);

//FUNCIÓN MOVER IMAGENES
function moverObjeto(objeto, velocidadX, velocidadY) {
   const limiteX = window.innerWidth - objeto.clientWidth;
   const limiteY = window.innerHeight - objeto.clientHeight;

   function mover() {
       let posX = parseInt(getComputedStyle(objeto).left);
       let posY = parseInt(getComputedStyle(objeto).top);

       let nuevaPosX = posX + velocidadX;
       let nuevaPosY = posY + velocidadY;

       // Verificar límites en el eje X
       if (nuevaPosX < 0 || nuevaPosX > limiteX) {
           velocidadX *= -1; // Cambiar dirección en el eje X
       }

       // Verificar límites en el eje Y
       if (nuevaPosY < 0 || nuevaPosY > limiteY) {
           velocidadY *= -1; // Cambiar dirección en el eje Y
       }

       objeto.style.left = nuevaPosX + 'px';
       objeto.style.top = nuevaPosY + 'px';
   }

   function cambiarDireccion() {
       velocidadX = Math.random() > 0.5 ? Math.abs(velocidadX) : -Math.abs(velocidadX); // Cambiar dirección en el eje X
       velocidadY = Math.random() > 0.5 ? Math.abs(velocidadY) : -Math.abs(velocidadY); // Cambiar dirección en el eje Y
   }

   // Mover el objeto cada 30 milisegundos (ajusta según tus preferencias)
   setInterval(mover, 15);

   // Cambiar dirección aleatoriamente cada 3000 milisegundos (3 segundos)
   setInterval(cambiarDireccion, 2500);
}

const imagenMovil = document.getElementById('boton1');
moverObjeto(imagenMovil, 2, 5);

const imagenMovil2 = document.getElementById('boton3');
moverObjeto(imagenMovil2, 2, 3);

//FUNCIONES OJO MOVIL
const ojoMovil = document.getElementById('ojo-pizarra');
moverObjeto(ojoMovil, 1, 2);

ojoMovil.addEventListener('click', funcGene.abrirLinkAleatorio);

const ojito = new Typed('.ojo-pizarra', {
   strings: ['Los', 'ojos', 'quieren', 'que', 'abras', 'los', 'ojos', 'para', 'ganar', 'eso', 'que', 'quieres'],
   typeSpeed: 50,
   cursorChar: '|',
   loop: true
});