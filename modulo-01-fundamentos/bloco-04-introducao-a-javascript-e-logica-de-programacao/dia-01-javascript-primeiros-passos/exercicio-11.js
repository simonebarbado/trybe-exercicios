const salarioBruto = 3000;
let inss;
let impostoRenda;

if (salarioBruto < 1556.95) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto < 2594.93) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto < 5189.83) {
    inss = salarioBruto * 0.11;
} else {
    inss = 570.88;
}

const salarioBase = salarioBruto - inss;

if (salarioBase < 1903.99) {
    impostoRenda = 0;
} else if (salarioBase < 2826.66) {
    impostoRenda = (salarioBase * 0.075) - 142.80;
} else if (salarioBruto < 3751.06) {
    impostoRenda = (salarioBase * 0.15) - 354.80;
} else if (salarioBruto < 4664.69) {
    impostoRenda = (salarioBase * 0.225) - 636.13;
} else {
    impostoRenda = (salarioBase * 0.275) - 869.36;
}

const salarioLiquido = salarioBase - impostoRenda;
console.log("O salário líquido é R$" + salarioLiquido)