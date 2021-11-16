/*
 Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/
let palavra = "tomate";

function palindromo (palavra) {
// criar função para inversão das letras
    for (let index = palavra.length - 1; index < palavra.length; index -= 1) {
        let palavraInvertida = palavra[index];
        console.log(palavraInvertida)
    }

// criar função de validação do palíndromo
    if (palavra === palavraInvertida) {
        return true;
    } else {
        return false;
    }
}