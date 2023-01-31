var numbers = [3.02, -3.65, 5, -9];

let result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(Math.abs(Math.round(numbers[i])));
}

console.log(result);
