// Preguntas de la trivia
let preguntas = [
  {
    texto: "¿En qué lugar nació el Beato Alfredo Parte?",
    opciones: ["Palencia", "Villacarriedo", "Cilleruelo de Bricia", "Santander"],
    correcta: 2
  },
  {
    texto: "¿Qué enfermedad marcó su vida a los 18 años?",
    opciones: ["Tuberculosis", "Una lesión en el fémur que lo dejó cojo", "Pérdida de la vista", "Una enfermedad cardíaca"],
    correcta: 1
  },
  {
    texto: "¿Qué respondió Alfredo cuando los milicianos le quisieron ayudar a subir al barco?",
    opciones: [
      "Dios me levantará",
      "Hasta ahora he necesitado bastón, pero para subir hacia Dios no lo necesito",
      "No temo a la muerte, temo perder la fe",
      "Soy sacerdote y no necesito ayuda"
    ],
    correcta: 1
  },
  {
    texto: "¿Dónde estaba Alfredo cuando estalló la Guerra Civil Española?",
    opciones: ["En el colegio de Villacarriedo", "En Palencia, recién ordenado", "En su pueblo natal, Cilleruelo de Bricia", "En Santander, en la bahía"],
    correcta: 0
  },
  {
    texto: "Verdadero o falso: Alfredo escondió siempre que era sacerdote para no ser fusilado.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1
  },
  {
    texto: "¿Qué virtud destacaba en su trato con los niños y jóvenes?",
    opciones: ["Esperanza", "Humildad", "Amor al prójimo", "Todas las anteriores"],
    correcta: 3
  },
  {
    texto: "¿En qué año fue beatificado por el Papa Juan Pablo II?",
    opciones: ["1936", "1950", "1995", "2001"],
    correcta: 2
  }
];

let indice = 0; 
let puntaje = 0;

let preguntaElem = document.getElementById("pregunta");
let opcionesElem = document.getElementById("opciones");
let resultadoElem = document.getElementById("resultado");
let btnSiguiente = document.getElementById("siguiente");


function mostrarPregunta() {
  let actual = preguntas[indice];
  preguntaElem.innerHTML = actual.texto;

  
  opcionesElem.innerHTML = "";

  // mostrar opciones
  for (let i = 0; i < actual.opciones.length; i++) {
    let boton = document.createElement("button");
    boton.innerHTML = actual.opciones[i];
    boton.addEventListener("click", function() {
      if (i === actual.correcta) {
        resultadoElem.innerHTML = "✅ Correcto!";
        puntaje++;
      } else {
        resultadoElem.innerHTML = "❌ Incorrecto";
      }
      btnSiguiente.style.display = "block"; 
    });
    opcionesElem.appendChild(boton);
  }

  btnSiguiente.style.display = "none"; 
}


btnSiguiente.addEventListener("click", function() {
  indice++;
  resultadoElem.innerHTML = "";
  if (indice < preguntas.length) {
    mostrarPregunta();
  } else {
    preguntaElem.innerHTML = "Trivia terminada 🎉";
    opcionesElem.innerHTML = "Tu puntaje fue: " + puntaje + " de " + preguntas.length;
    btnSiguiente.style.display = "none";
  }
});


mostrarPregunta();