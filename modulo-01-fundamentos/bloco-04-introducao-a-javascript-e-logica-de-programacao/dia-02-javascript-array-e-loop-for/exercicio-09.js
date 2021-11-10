let numbers = [];

for (let i = 1; i <= 25; i += 1) {
    numbers.push(i)
    numbers[i] = numbers [i] / 2
}

console.log(numbers)
