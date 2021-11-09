// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

var n = 5;

// código para gerar as linhas
let linha = "";
let symbol = "*";

for (index = 0; index <= n; index += 1) {
    linha += symbol;
}

// código para imprimir as linhas
for (index = 0; index <= n; index += 1) {
    console.log(linha);
}