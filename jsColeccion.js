document.getElementById('aventador').addEventListener('click', () => {
   redireccionarPagina('Aventador')
});

/*document.getElementById('dakota').addEventListener('click', () => {
   redireccionarPagina('Dakota')
});*/

document.getElementById('elise').addEventListener('click', () => {
   redireccionarPagina('Elise')
});

document.getElementById('jetta').addEventListener('click', () => {
   redireccionarPagina('Jetta')
});

document.getElementById('supra').addEventListener('click', () => {
   redireccionarPagina('Supra')
});

document.getElementById('dreams').addEventListener('click', () => {
   redireccionarPagina('Dreams')
});


function redireccionarPagina(elemento) {
   
   window.location.replace(`../PagesCartas/${elemento}.html`)

}

document.getElementById('back').addEventListener('click', () => {
   window.location.replace('../laInvitacion.html');
})
