var n = 5;

// código para gerar as linhas
let linha = "";
let symbol = "*";
let space = " ";

// código para imprimir as linhas
for (index = 0; index <= n; index += 1) {
    for (index = 0; index < n; index +=1) {
        linha += space;
    }
    linha += "*";
    console.log(linha);
}