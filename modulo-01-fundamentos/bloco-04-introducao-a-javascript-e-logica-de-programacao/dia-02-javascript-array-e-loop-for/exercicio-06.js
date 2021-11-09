let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;

for (let index in numbers) {
  if (numbers[index] % 2 == 1) {
    contador += 1;
  }
}

// Ajuda do gabarito
if (contador === 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(contador)
}