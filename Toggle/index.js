const icon = document.querySelector(".icon");
// console.log(icon);
const iconClose = document.querySelector(".iconClose");
// console.log(iconClose);
const left = document.querySelector(".left");
// console.log(left);

let display = "none";

icon.addEventListener("click", () => {
  if (display === "none") {
    left.style.display = "block";
    display = "block";
  } else if (display === "block") {
    left.style.display = "none";
    display = "none";
  }
});

iconClose.addEventListener("click", () => {
  if (display === "block") {
    left.style.display = "none";
    display = "none";
  }
});
