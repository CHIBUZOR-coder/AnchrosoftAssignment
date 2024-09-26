function Calculator(num1, num2, Assignment) {
  let result;

  if (Assignment === "+") {
    result = num1 + num2;
  } else if (Assignment === "-") {
    result = num1 - num2;
  } else if (Assignment === "x") {
    result = num1 * num2;
  } else if (Assignment === "/") {
    result = num1 / num2;
  } else if (Assignment === "%") {
    (num1 / num2) * 100;
  } else {
    console.log("Invalid Assignment");
  }
  return result;
}
const answer = Calculator(10, 40, "/");
console.log(answer);

function Fabinocci() {
  let fab = [0, 1];

  for (i = 2; i < 10; i++) {

    fab[i] = fab[]
  }
}


fab[i]