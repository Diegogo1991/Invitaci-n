//IMPORTACION FUNCIONES GENERALES

import { funcGene } from "./functions.js";

setTimeout(funcGene.musicAleatorie, 1);

setTimeout(funcGene.fondoAleatorio, 1);

/*document.addEventListener/*("DOMContentLoaded", function () {
   setTimeout(funcGene.fondoAleatorie, 1);
});*/

const typed = new Typed('.typed', {
   strings: ['Un día yo estaba como tú; viendo algo que llamó mi atención en la universidad. Después de eso pasaron cosas tan extrañas que llegué a sentir todo como un sueño surrealista. <br> Cosas que me hicieron dudar de mi forma de actuar. Mi forma de pensar. Cosas que me hicieron hacer otras cosas, de las cuales no sé si soy'],
   typeSpeed: 20,
   cursorChar: '', 
   onComplete: () => {
      var botonesPrimeros = document.getElementById('botonesPrimeros');
      botonesPrimeros.innerHTML = '<button id="culpable" class="boton"></button> <button id = "complice" class="boton" ></button> <button id="elegido" class="boton"></button> <button id="observador" class="boton"></button>';

      setTimeout(() => {
         var boton = document.querySelectorAll('.botones .boton');

         for (let i = 0; i < boton.length; i++) {
            boton[i].style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`
         }
      }, 1);

      var boton = document.querySelectorAll('.botones .boton');
      /*boton.forEach(element => (element).style.display = "flex");*/
      var opciones = ["Culpable", "Complice", "Elegido", "Observador"];
      for (let i = 0; i < boton.length; i++) {
         boton[i].innerHTML = `${opciones[i]}`;
      }

      var culpable = document.getElementById('culpable');
      var complice = document.getElementById('complice');
      var elegido = document.getElementById('elegido');
      var observador = document.getElementById('observador');

      culpable.addEventListener('click', siguienteParrafo);
      complice.addEventListener('click', siguienteParrafo);
      elegido.addEventListener('click', siguienteParrafo);
      observador.addEventListener('click', siguienteParrafo);
   }
});

/*setTimeout(() => {
}, 17000)*/

/*var culpable = document.getElementById('culpable');
var complice = document.getElementById('complice');
var elegido = document.getElementById('elegido');
var observador = document.getElementById('observador');

//siguiente parrafo botones
culpable.addEventListener('click', siguienteParrafo);
complice.addEventListener('click', siguienteParrafo);
elegido.addEventListener('click', siguienteParrafo);
observador.addEventListener('click', siguienteParrafo);*/

var parrafo2; //PENDIENTEEEEEEEEE
var parrafo3; //PARA NEW TYPED
var venganza = 0, interes = 0, verdad = 0;

//parrafo3 botones
/*venganza.addEventListener('click', mostrarParrafo3);
interes.addEventListener('click', mostrarParrafo3);
verdad.addEventListener('click', mostrarParrafo3);*/

var sueños;

//para ultimo parrafo
var porqueSoñar;

function siguienteParrafo(e) {
   var palabra;
   switch (e.target.id) {
      case "culpable":
         palabra = "sueños";
         break;
      case "complice":
         palabra = "regalos";
         break;
      case "elegido":
         palabra = "********";
         break;
      case "observador":
         palabra = "hechos";
         break;
      default:
         break;
   }
   var textoOpcional = "por algo o alguien para algún tipo de plan; todo solamente por ver un suceso, por estar en un lugar a esa hora.";

   var texto = `De un plan que engañaría a muchas personas y al final esas mismas personas serían las encargadas de hacer ver la verdad sobre los “${palabra}”. Ahora que lo pienso, podría ser persona (en singular) en vez de personas, porque si el plan era solo para mí, entonces solo sería para ti.`
   var parrafo = document.getElementById('parrafo2');
   var elemento = document.createElement("div");
   var contenido; //PENDIENTEEEEEE
   if (palabra == "********") {
      contenido = textoOpcional + " " + texto;
   } else {
      contenido = texto;
   }
   /*elemento.appendChild(contenido);*/
   elemento.classList.add("texto");
   elemento.classList.add("texto2");
   parrafo.appendChild(elemento);


   parrafo2 = new Typed('.texto2', {
      strings: [contenido],
      typeSpeed: 20,
      cursorChar: '',
      onComplete: () => {
         var botones = document.createElement("div");
         botones.setAttribute("class", "botones");
         parrafo.appendChild(botones);

         /*let ides = ["venganza", "interes", "verdad"];
         let preguntas = ["¿Por venganza?", "¿Por interés?", "¿Para decirte la verdad?"]*/
         /*for (let i = 0; i < ides.length; i++) {
            let boton = document.createElement("button");
            boton.setAttribute("class", "boton");
            boton.setAttribute("id", `${ides[i]}`);
            boton.textContent = `${preguntas[i]}`;
            
            botones.appendChild(boton);
         }*/
         botones.innerHTML = '<button id="venganza" class="boton">¿Por venganza?</button> <button id = "interes" class="boton" >¿Por interés?</button> <button id="verdad" class="boton">¿Para decirte la verdad?</button>';

         venganza = document.getElementById('venganza');
         interes = document.getElementById('interes');
         verdad = document.getElementById('verdad');

         venganza.addEventListener('click', mostrarParrafo3);
         interes.addEventListener('click', mostrarParrafo3);
         verdad.addEventListener('click', mostrarParrafo3);

         setTimeout(() => {
            var boton = document.querySelectorAll('#parrafo2 .botones .boton');

            for (let i = 0; i < boton.length; i++) {
               boton[i].style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`
            }
         }, 1)
      }
   })
   
   /*setTimeout(() => { 
   }, 20000)*/
   
   /*var padreBotones = document.getElementById('botonesPrimeros');
   var hijosBotones = document.querySelectorAll('#botonesPrimeros .boton');
   for (let i = 0; i < hijosBotones.length; i++) {
      padreBotones.removeChild(hijosBotones[i]);
   }*/
   
   culpable.removeEventListener('click', siguienteParrafo);
   complice.removeEventListener('click', siguienteParrafo);
   elegido.removeEventListener('click', siguienteParrafo);
   observador.removeEventListener('click', siguienteParrafo);
   
   /*culpable.style.display = "none";
   complice.style.display = "none";
   observador.style.display = "none";
   elegido.style.display = "none";*/
   
}

/*function ultimoTexto() {
   document.getElementById('content').innerHTML = '<div id="conocimiento" class="conocimiento"></div>'
   new Typed('.conocimiento', {
      strings: ['Después de una semana. Ten paciencia. Nos vemos.'],
      typeSpeed: 35,
      cursorChar: ''
   });

   setTimeout(() => {
      window.location.replace('index.html');
   }, 3000)
}*/

var ella;
var evidencias;
function ellaPregunto() {
   document.getElementById('content').innerHTML = '<div id="conocimiento" class="conocimiento"></div>';

   var contenido = 'Ella me preguntó una vez: "¿Qué pasará si el plan no sale como crees? ¿Qué sucederá si todo lo que has hecho no es visto ni recordado por nadie?", mientras se reía. Yo me reí aún más fuerte porque la pregunta es estúpida; pasaría lo mismo que si no lo hiciera, nada. <br> Para empezar, si estás leyendo esto es porque sí ocurrió. Confieso que deseo que esto sea visto y reflexionado por varias personas, aunque me conformaría con solo una, pero no lo hago por o para nadie. Lo he dicho incluso en una de las clases que formaron parte de esto. Lo hago por y para mí. <br> Bueno, eso es lo que quiero hacerte creer. <br> Solo analiza: si pienso que aquí todo se olvida rápidamente y la gente no se da cuenta de lo que sucede y de lo "malo" que hice, ¿por qué seguiría haciéndolo? Aquellos que me conocen saben que cuando me preguntan "¿qué sería lo peor que podría pasar?", respondo: quedar con vida. <br>  No solo quiero que sea visto por varias personas; algo que deseo más que eso es confundirte con esto y que la verdad llegue hasta donde tú decidas. Si confieso algo y nadie escucha, no es asunto mío. Libero la tensión y el único en paz seré yo. Tampoco he considerado arrepentirme. <br> Sin embargo, no lo dejaré todo tan fácil y evidente, ni siquiera podría hacerlo si quisiera. Tengo tantas pruebas con <br> <div class="evidencias" id="evidencias"> <button id="fotos" class="botonev"> fotos,</button> <button id="chats" class="botonev"> chats, </button>  <button id="videos" class="botonev"> videos, </button>  <button id="audios" class="botonev"> audios, </button> <button id="textos" class="botonev"> textos, </button> </div> que a veces no sé ni cómo hacer todo. Solo confío, o confía, en que después de una semana por cada noche se irá revelando un “sueño”, uno más aparte de los tantos camuflados en las imágenes aleatorias de cada pregunta. Y me da igual si ves esto solo una vez. De hecho, lo mejor para ti sería así, porque recuerda la primera advertencia. ¿¡Seré idiota!? ¿Por qué creo que recordarás la primera advertencia si ni siquiera recuerdas lo que ocurrió en las fechas que aparecen? ¿Comprendes a qué me refiero? Sé que no lo haces. Nuestra sombra, aquella que me interrogó, tampoco lo hace.'

   /*ella = new Typed('.conocimiento', {
      strings: [contenido],
      typeSpeed: 30,
      cursorChar: ''
   })*/
   
   ella = new Typed('.conocimiento', {
      strings: [contenido],
      typeSpeed: 20,
      cursorChar: '',
      onComplete: function () {

         let chats = document.getElementById('chats');
         chats.style.backgroundColor = "rgba(4, 250, 250, 0.541)";
         chats.addEventListener('click', () => {
            window.location.replace('sinPensar.html');
         })

         let textos = document.getElementById('textos');
         textos.style.backgroundColor = "rgba(4, 250, 250, 0.541)";
         textos.addEventListener('click', () => {
            window.location.replace('../coleccion.html');
         })

         let audios = document.getElementById('audios');
         audios.style.backgroundColor = "rgba(4, 250, 250, 0.541)";
         audios.addEventListener('click', () => {
            window.location.replace('../audios.html');
         })

         let fotos = document.getElementById('fotos');
         fotos.style.backgroundColor = "rgba(4, 250, 250, 0.541)";
         fotos.addEventListener('click', () => {
            window.location.replace('../Bucle1.html');
         })

         let videos = document.getElementById('videos');
         videos.style.backgroundColor = "rgba(4, 250, 250, 0.541)";
         videos.addEventListener('click', () => {
            window.location.replace('../psique.html');
         })
         
         /*var evidencias = document.getElementById('evidencias');
         if (evidencias) {
            evidencias.addEventListener('click', ultimoTexto);
         }*/
      }
   });
}


function resetear() {
   console.log("borraré todo");
   document.getElementById('content').innerHTML = '<div id="conocimiento" class="conocimiento"></div>';
   var contenido = '¿Por qué soñamos? <br> Como decir todo lo que sé y lo que pienso implica un riesgo, debo asegurarme de ir lento. Me gustaría contar todo de inmediato, sin “cápsulas” ni metáforas, así me libraría más rápido de la culpa, pero todo ha sido tan extraño que debo pensar en mi seguridad. <br> Hacer todo lo que hice te revuelve la cabeza. Tantas cosas probablemente en más de un año. Además, para que el plan salga bien y sepas la verdad, debo ir haciendo cambios poco a poco. Si eres nuevo por aquí probablemente no entiendas de que hablo, sin embargo, ya hay unas personas que empezaron a notar los cambios (evolución) de esta verdad ¡qué escribo verdad! de esta página. Y por lo anterior quiero decir que es común que asocie este tipo de cosas con eso de los actos fallidos, maldito tema tan bueno. <br> ¿Recuerdas lo de los links ? ¿Cambió cierto ? <br> <div class="penultimos"> <a class="boton" href="psique.html">Si cambiaron</a> <button id="ellaUnaVez" onClick="ellaPregunto()" class="boton">No importan los links</button> </div>';

   /*setTimeout(() => {
      var evidencias = document.getElementById('ellaUnaVez');
      evidencias.addEventListener('click',ellaPregunto);
   }, 100)*/

   porqueSoñar = new Typed('.conocimiento', {
      strings: [contenido],
      typeSpeed: 20,
      cursorChar: '',
      onComplete: () => {
         var evidencias = document.getElementById('ellaUnaVez');
         evidencias.addEventListener('click', ellaPregunto);
      }
   }) 
}

function mostrarParrafo3(e) {

   document.getElementById('venganza').removeEventListener('click', mostrarParrafo3);
   document.getElementById('interes').removeEventListener('click', mostrarParrafo3);
   document.getElementById('verdad').removeEventListener('click', mostrarParrafo3);

   let palabra;
   switch (e.target.id) {
      case "venganza":
         palabra = "hechos";
         break;
      case "interes":
         palabra = "********";
         break;
      case "verdad":
         palabra = "crímenes";
         break;
      default:
         break;
   }

   var texto = `Los sueños pueden ser una fachada precisamente de los detalles de aquel plan de tantos ${palabra}.`;
   var parrafo = document.getElementById('parrafo3');
   var pizarra = document.createElement("div");
   pizarra.classList.add("texto");
   pizarra.classList.add("texto3");

   parrafo.appendChild(pizarra);

   /*setTimeout(() => {
      
   }, 5000)*/

   parrafo3 = new Typed('.texto3', {
      strings: [texto],
      typeSpeed: 20,
      cursorChar: '',
      onComplete: () => {
         var botones = document.createElement("div");
         botones.setAttribute("class", "botones");
         parrafo.appendChild(botones);

         botones.innerHTML = '<button id="sueños" class="boton">¿Por qué soñamos?</button>';

         sueños = document.getElementById('sueños');
         sueños.addEventListener('click', resetear);
      }
   })

}







