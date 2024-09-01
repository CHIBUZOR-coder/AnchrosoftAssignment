const prompt = require("prompt-sync")();

//Using for loop:
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i;
for (i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0 && num[i] % 3 === 0) 
    console.log(`Foorloop: ${num[i]} \n`);
}

//Using while loop:
let numm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let j = 0;
while (j < num.length) {
  if (num[j] % 2 === 0 && num[j] % 3 === 0)
     console.log(`Whileloop: ${numm[j]} \n`);
        j++;
}

//Do while loop:
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = 0;
do {
  if (num2[b] % 2 === 0 && num2[b] % 3 === 0) {
    console.log(`Do loop: ${num2[b]} \n`);
  }
  b++;
} while (b < num2.length);
