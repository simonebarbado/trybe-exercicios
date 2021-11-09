// 1. Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.
let soma = 0;

for (index = 0; index <= 1000; index += 1) {
    soma += index;
}

console.log("A soma de 1 a 1000 é: " + soma);

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let contador = 0;

for (i = 0; i <= 150; i += 1) {
    if ((i/3) == 0) {
        contador =+ 1;
        if (contador === 50) {
            console.log("Mensagem secreta");
        }
    }
}

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "pedra";
let player2 = "tesoura";

if (player1 === "pedra" && player2 === "tesoura" || player1 === "tesoura" && player2 === "papel" || player1 === "papel" && player2 === "pedra" ) {
    console.log("Player 1 won");
} else if (player1 === player2) {
    console.log("A Ties");
} else {
    console.log("Player 2 won");
}

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let idade = 18
if (idade < 18) {
    console.log("A pessoa é menor de idade")
} else {
    console.log("A pessoa é maior de idade")
} 

//5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
var idadeCarol = 20;
var idadeMurilo = 30;
var idadeBaeta = 25;

if (idadeCarol < idadeBaeta && idadeCarol < idadeMurilo) {
    console.log("Carol é a mais nova.");
} else if (idadeBaeta < idadeCarol && idadeBaeta < idadeMurilo) {
    console.log("Baêta é o mais novo.");
} else {
    console.log("Murilo é o mais novo");
}