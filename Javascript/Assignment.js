const prompt = require("prompt-sync")();


// //Code
// const Name = prompt("Enter your name:");
//  let age = prompt("Enter Age:");
// const result = Number(prompt("Enter your score:"));
// let liscence = prompt("do you have a licence? (Y/N):");
// liscence = liscence.toLocaleLowerCase();
// const personn = {
//   Name: Name,
//   score: result,
//   Age: age,
//   Lisence: liscence,
// };
// if (!isNaN(result)) {
//   const checkScore =
//     personn.score >= 60 && personn.Lisence === "y" ? `Congratulations ${Name}, you Successfull` : `${Name}, you are not of age.`;
//   console.log(checkScore);
// } else console.log("Please enter a valid number");


//Using for loop:
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i;

for(i = 0; i<num.length; i++){
if(num[i] % 2 === 0)
    console.log(num[i]);
}


//Using while loop:
let numm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let j = 0;
while(j<num.length){
if(numm[j] % 2 === 0)
    console.log(numm[i]);
i++
}



//Using while loop:
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = 0;
do {
  if (num2[b] % 2 === 0) {
    console.log(num2[j]);
  }
  b++;
} while (j < num2.length);
