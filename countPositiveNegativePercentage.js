//Take n numbers as input and count how many are positive and negative, and print the percentages of pos. and neg.
let numbers = [];
let pos_Num = 0;
let neg_Num = 0;

while (true) {
  let input = prompt('Enter a number:');
  if (input === null || input.trim() === '') {
    break;
  }
  if (input > 0) {
    numbers.push(input);
    pos_Num++;
  } else if (input < 0) {
    numbers.push(input);
    neg_Num++;
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }
}

let total_Num = numbers.length;
let pos_percentage = (pos_Num / total_Num) * 100;
let neg_percentage = (neg_Num / total_Num) * 100;

console.log(`Total numbers: ${total_Num}`);
console.log(`Positive numbers: ${pos_Num} (${pos_percentage.toFixed(2)}%)`);
console.log(`Negative numbers: ${neg_Num} (${neg_percentage.toFixed(2)}%)`);
