/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri vengono nascosti nell’html e l’utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
da indovinare sono stati individuati. */

function randomNumber(min, max) {
  const randomN = Math.floor(Math.random() * (max + 1 - min)) + min;
  return randomN;
}

// funziona che crea un array di bombe con un range in base alla difficoltà

function createRandomNumbers(minimum, maximum) {
  // dichiaro un array vuoto
  let arrayRandom = [];
  /* fai il ciclo FINCHE' l'array non diventa
      di 4 elementi + 1 elemento extra aggiunto sotto e si chiude */
  while (arrayRandom.length < 5) {
    // dichiaro cost random associata alla funzione
    const newRandom = randomNumber(minimum, maximum);
    // Se l'array non include questo numero
    if (!arrayRandom.includes(newRandom)) {
      // PUSHALO nell'array
      arrayRandom.push(newRandom);
    }
  }
  return arrayRandom;
}

// assegno il risultato della funzione ad una costante casualNumbers
const casualNumbers = createRandomNumbers(1, 10);

// collego hookHtml con il dom tramite id "hook-js"

const hookHtml = document.getElementById("hook-js");

// Stampo 5 numeri randomici in pagina

hookHtml.innerHTML = ` <div> Here are five numbers, memorize them! : </div>`;
hookHtml.innerHTML += ` <div> ${casualNumbers[0]} </div>`;
hookHtml.innerHTML += ` <div> ${casualNumbers[1]} </div>`;
hookHtml.innerHTML += ` <div> ${casualNumbers[2]} </div>`;
hookHtml.innerHTML += ` <div> ${casualNumbers[3]} </div>`;
hookHtml.innerHTML += ` <div> ${casualNumbers[4]} </div>`;
