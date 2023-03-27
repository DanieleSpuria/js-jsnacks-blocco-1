const dispari = [];
let num;

for (let i = 1; i <= 6; i++) {
  num = prompt('Inserisci un numero')
  if (num % 2) {
    dispari.push(num)
  }
}

console.log(dispari);
