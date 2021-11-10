const a = 3;
const b = 4;
const c = 5;
const value = 10;

// Exercício 01
function soma(a,b) {
    return (a + b);
}

function subtracao(a,b) {
    return (a - b);
}

function multiplicacao(a,b) {
    return (a * b);
}

function divisao(a,b) {
    return (a / b);
}

function modulo(a,b) {
    return (a % b);
}

console.log(`Os resultados são respectivamente: ${soma(a,b)}, ${subtracao(a,b)}, ${multiplicacao(a,b)}, ${divisao(a,b)}, ${modulo(a,b)}`)

// Exercício 02
function compararDoisValores(a,b) {
    if (a > b){
        return(`O maior valor é ${a}`);
    } else {
        return(`O maior valor é ${b}`);
    }
}

console.log(compararDoisValores(a,b))

// Exercício 03
function compararTresValores(a,b,c) {
    if (a > b && a > c){
        return(`O maior valor é ${a}`);
    } else if (b > a && b > c){
        return(`O maior valor é ${b}`);
    } else {
        return(`O maior valor é ${c}`);
    }
}

console.log(compararTresValores(a,b,c))

// Exercício 04
function positivoOuNegativo(value) {
    if (value > 0){
        return('Positive');
    } else if (value < 0) {
        return('Negative');
    } else {
        return('Zero');
    }
}

console.log(positivoOuNegativo(value));

// Exercício 05

function ehTriangulo (a,b,c) {
    let res = a + b + c;
    let positiveAngle = a > 0 && b > 0 && c > 0; //recomendação do gabarito

    if (positiveAngle) {
        if (res === 180) {
            console.log(true);
        } else {
            console.log(false);
        }
    } else {
        console.log("Valor inválido")
    }
}

console.log(ehTriangulo(a,b,c))