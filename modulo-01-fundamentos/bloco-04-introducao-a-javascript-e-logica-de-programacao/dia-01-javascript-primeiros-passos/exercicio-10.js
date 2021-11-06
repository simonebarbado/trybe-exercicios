const costOfProduct = 2;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0){
    let totalProfit = (saleValue - (costOfProduct * 1,2)) * 1000;
    console.log(totalProfit)
} else {
    console.log("Erro: os valores não podem ser negativos")
}