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

const hookHtml2 = document.getElementById("hook2-js");

// Stampo 5 numeri randomici in pagina

hookHtml.innerHTML = ` <div> Here are five numbers, memorize them, you have 30 seconds: </div>`;
hookHtml.innerHTML += ` <div> ${casualNumbers[0]} </div>`;
hookHtml.innerHTML += ` <div> ${casualNumbers[1]} </div>`;
hookHtml.innerHTML += ` <div> ${casualNumbers[2]} </div>`;
hookHtml.innerHTML += ` <div> ${casualNumbers[3]} </div>`;
hookHtml.innerHTML += ` <div> ${casualNumbers[4]} </div>`;

// timeout per far scomparire i numeri dopo 30 secondi

setTimeout(function () {
  hookHtml.classList.add("hide");
}, 30000);

// dichiaro un altro array vuoto per l'user
let userArray = [];

setTimeout(function () {
  /* fai il ciclo FINCHE' l'array non diventa
          di 4 elementi + 1 elemento extra aggiunto sotto e si chiude */
  while (userArray.length < 5) {
    // dichiaro cost random associata alla funzione
    const userNumber = parseInt(prompt("Enter one of the numbers you saw"));
    // Se l'array non include questo numero
    if (!userArray.includes(userNumber)) {
      // PUSHALO nell'array
      userArray.push(userNumber);
    }
  }
}, 31000);

// dichiaro un array vuoto che conterrà le risposte corrette
let rightAnswers = [];

// dichiaro un contatore che parte da 0
let counterOK = 0;

setTimeout(function () {
  for (let i = 0; i < casualNumbers.length; i++) {
    if (userArray.includes(casualNumbers[i])) {
      // riempio con il numero casualNumbers[i] rightAnswers
      rightAnswers.push(casualNumbers[i]);
      // incremento il contatore
      counterOK++;
    }
  }
  // stampo in HTML il contatore a fine ciclo
  hookHtml2.innerHTML = `<div> You guessed ${counterOK} answers, these:</div>`;
  // stampo in HTML le risposte corrette
  hookHtml2.innerHTML += `<div> ${rightAnswers} </div>`;
}, 32000);
