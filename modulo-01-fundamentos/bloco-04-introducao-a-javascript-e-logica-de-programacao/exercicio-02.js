let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index in numbers) {
  result += numbers[index];
}

console.log(result);