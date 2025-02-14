
// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
{ text: "Hello again, friend of a friend", trans: "Hola de nuevo, amigo de un amigo", time: 12 },
  { text: "I knew you when", trans: "Te conocía antes", time: 15 },
  { text: "Our common goal", trans: "Nuestro objetivo común", time: 18 },
  { text: "Was waiting for", trans: "Era esperar", time: 21 },
  { text: "The world to end", trans: "A que el mundo terminara", time: 24 },
  { text: "Now that the truth", trans: "Ahora que la verdad", time: 29 },
  { text: "Is just a rule", trans: "Es solo una regla", time: 31 },
  { text: "That you can bend", trans: "Que puedes doblar", time: 34 },
  { text: "You crack the whip", trans: "Tomas el látigo", time: 37 },
  { text: "Shape-shift and trick", trans: "Cambias de forma y engañas", time: 39 },
  { text: "The past again", trans: "Al pasado otra vez", time: 42 },
  { text: "I'll send you my love", trans: "Te enviaré mi amor", time: 47 },
  { text: "On a wire", trans: "En un cable", time: 50 },
  { text: "Lift you up", trans: "Te levantaré", time: 52 },
  { text: "Every time", trans: "Cada vez", time: 54 },
  { text: "Everyone", trans: "Todos", time: 55 },
  { text: "Ooh, pulls away", trans: "Se alejan", time: 57 },
  { text: "From you", trans: "De ti", time: 59 },
  { text: "Got balls of steel", trans: "Tienes bolas de acero", time: 64 },
  { text: "Got an automobile", trans: "Tienes un automóvil", time: 67 },
  { text: "For a minimum wage", trans: "Por un salario mínimo", time: 70 },
  { text: "Got real estate", trans: "Tienes bienes raíces", time: 73 },
  { text: "I'm buying it all up", trans: "Estoy comprándolo todo", time: 75 },
  { text: "In outer space", trans: "En el espacio exterior", time: 78 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
