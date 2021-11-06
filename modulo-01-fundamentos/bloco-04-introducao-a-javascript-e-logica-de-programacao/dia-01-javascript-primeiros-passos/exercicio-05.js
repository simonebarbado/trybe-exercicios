const a = 60;
const b = 30;
const c = 90;

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
