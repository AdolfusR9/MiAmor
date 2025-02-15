
// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
{ text: "Hello again, friend of a friend", <br>  "Hola de nuevo, amigo de un amigo", time: 18 },
  { text: "I knew you when", <br> "Te conocía antes", time: 22 },
  { text: "Our common goal", <br> "Nuestro objetivo común", time: 24 },
  { text: "Was waiting for", <br> "Era esperar", time: 27  },
  { text: "The world to end",<br> "A que el mundo terminara", time: 29 },
  { text: "Now that the truth", <br> "Ahora que la verdad", time: 33 },
  { text: "Is just a rule", <br> "Es solo una regla", time: 35  },
  { text: "That you can bend", <br> "Que puedes doblar", time: 36 },
  { text: "You crack the whip", <br> "Tomas el látigo", time: 41 },
  { text: "Shape-shift and trick", <br> "Cambias de forma y engañas", time: 43 },
  { text: "The past again", <br> "Al pasado otra vez", time: 45 },
  { text: "I'll send you my love", <br> "Te enviaré mi amor", time: 47 },
  { text: "On a wire", <br> "Por un Telegrama ", time: 49 },
  { text: "Lift you up", <br> "Te levantaré", time: 52 },
  { text: "Every time", <br> "Cada vez", time: 54 },
  { text: "Everyone", <br> "Todos", time: 55  },
  { text: "Ooh, pulls away", <br> "Se alejan", time: 58 },
  { text: "From you", <br> "De ti", time: 62 },
   { text: "..." time: 64  },
  { text: "Got balls of steel", <br> "Tienes bolas de acero", time: 95 },
  { text: "Got an automobile", <br> "Tienes un automóvil", time: 97 },
  { text: "For a minimum wage", <br>: "Por un salario mínimo", time: 99 },
  { text: "Got real estate", <br> "Tienes bienes raíces", time: 103 },
  { text: "I'm buying it all up", <br> "Estoy comprándolo todo", time: 105 },
  { text: "In outer space", <br> "En el espacio exterior", time: 107 }
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
