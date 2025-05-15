const personaje = document.getElementById('personaje');
const casas = document.querySelectorAll('.casa');
const musica = document.getElementById('musica');


const menu = document.getElementById('menu');
const game = document.getElementById('game-container');
const empezarBtn = document.getElementById('empezar');
const opciones = document.querySelectorAll('.opcion');

let personajeSeleccionado = null;

// Elegir personaje
opciones.forEach(opcion => {
  opcion.addEventListener('click', () => {
    opciones.forEach(o => o.classList.remove('seleccionado'));
    opcion.classList.add('seleccionado');
    personajeSeleccionado = opcion.dataset.personaje;
    empezarBtn.disabled = false;
  });
});

// Comenzar juego
empezarBtn.addEventListener('click', () => {
  document.getElementById('personaje').src = 'assets/personajes/' + personajeSeleccionado;
  menu.style.display = 'none';
  game.style.display = 'block';
});



// Datos de cada casa
const dataCasas = [
  {
    video: "https://www.youtube.com/watch?v=l0wLZ6DAwXM",
    letra: "letras/cuervos.html",
    audio: "assets/audio/cuervos.mp3",
    juego: "juegos/cuervos/index.html"
  },
  {
    video: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
    letra: "letras/cancion2.html",
    audio: "assets/audio/cancion2.mp3"
  },
   {
    video: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
    letra: "letras/cancion2.html",
    audio: "assets/audio/cancion2.mp3"
  }
];

let x = 50;
let y = 50;
const speed = 30;

function mover(dx, dy) {
  x += dx * speed;
  y += dy * speed;

  // Limites
  x = Math.max(0, Math.min(1800, x));
  y = Math.max(0, Math.min(850, y));

  personaje.style.left = x + 'px';
  personaje.style.top = y + 'px';

  verificarColision();
}

function verificarColision() {
  casas.forEach(casa => {
    const rectCasa = casa.getBoundingClientRect();
    const rectPersonaje = personaje.getBoundingClientRect();

    const overlap = !(
      rectCasa.right < rectPersonaje.left ||
      rectCasa.left > rectPersonaje.right ||
      rectCasa.bottom < rectPersonaje.top ||
      rectCasa.top > rectPersonaje.bottom
    );

    if (overlap) {
      mostrarOpciones(parseInt(casa.dataset.id));
    }
  });
}

function mostrarOpciones(id) {
  const datos = dataCasas[id];
  const eleccion = prompt("Elegí una opción:\n1. Ver video\n2. Ver letra y escuchar\n3. JUEGO\n4. Cancelar");

  if (eleccion === "1") {
    window.open(datos.video, '_blank');
  } if (eleccion === "2") {
    window.location.href = datos.letra;
    musica.src = datos.audio;
    musica.play();
  } else if (eleccion === "3") {
   window.open(datos.juego, "_blank");
  }
}

document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp': mover(0, -1); break;
    case 'ArrowDown': mover(0, 1); break;
    case 'ArrowLeft': mover(-1, 0); break;
    case 'ArrowRight': mover(1, 0); break;
  }
});
