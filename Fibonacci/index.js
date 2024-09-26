// const prompt = require("prompt-sync")();
let fab = [];
function Fibonacci(num) {
  let fabNum;
  for (let i = 0; i < num; i++) {

    fabNum = i;
    fab.push(fabNum);
  }

  console.log(fab);
  for (let i = 0; i < num; i++) {
    if (fab[i] <= 1) {
      fab[i] = fab[i];
    } else {
      fab[i] = fab[i - 1] + fab[i - 2];
    }
  }

  console.log(fab);
}
Fibonacci(10);

// let fab = [0, 1];
// function Fibonacci(num) {
//   for (let i = 2; i < num; i++) {
//     fab.push(fab[i - 1] + fab[i - 2]);

//     console.log(fab);
//   }
// }
// Fibonacci(10);
