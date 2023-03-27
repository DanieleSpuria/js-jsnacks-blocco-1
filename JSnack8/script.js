// L'utente inserisce numero a quattro cifre

const num = prompt('Inserisci un numero di quattro cifre')
const arrayNum = num.split('',);

let verifica = false;



// Verifico che il numero di cifre inserito sia corretto

if (arrayNum.length === 4 ) {
  verifica = true;
} 

// Dichiaro la somma, la eseguo col for e stampo risultato

let sum = 0;

if (verifica === true) {
  for (let i = 0; i < 4; i++) {
    sum += parseInt(arrayNum[i]);
  } console.log(sum);
} else {
  console.log('Il numero delle cifre inserite è sbagliato');
}




  






