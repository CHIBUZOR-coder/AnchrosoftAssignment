//Togle nav Event Delegation
// Store the currently active SVG
const deligate = document.querySelector(".deligate");
let currentVisible = null;
let currentActiveSVG = null;
deligate.addEventListener("click", (e) => {
  // Check if the clicked target is the Font Awesome icon or its parent span
  if (e.target.closest(".svg")) {
    // Find the Font Awesome icon element
    let clickedIcon = e.target.classList.contains("fa-chevron-down")
      ? e.target
      : e.target.closest(".fa-chevron-down");

    //Toggle visibility
    // Find the closest parent span with class 'firstt'
    let parentSpan = e.target.closest(".firstt");

    // Find the next sibling span with class 'next'
    let next = parentSpan.querySelector(".next");

    // Hide the currently visible element if it's not the clicked one
    if (currentVisible && currentVisible !== next) {
      currentVisible.classList.add("hidden");
    }

    // Toggle visibility of the clicked element's next sibling
    if (next.classList.contains("hidden")) {
      next.classList.remove("hidden");
      currentVisible = next; // Update the currently visible element
    } else {
      next.classList.add("hidden");
      currentVisible = null; // No element is visible now
    }

    // If there's a previously active icon, reset its color
    if (currentActiveSVG && currentActiveSVG !== clickedIcon) {
      currentActiveSVG.style.color = "currentColor"; // Reset to default color
    }

    // Set the color to a specific shade for the clicked icon
    clickedIcon.style.color = "rgb(205,162,116)";

    // Update the currently active icon
    currentActiveSVG = clickedIcon;
  }
});
//*********************************************************************************** */

//Herobanner Image Slider
const arrRight = document.querySelector(".arrRight");
console.log(arrRight);
const arrLeft = document.querySelector(".arrLeft");
console.log(arrLeft);
const heroImages = [
  "./images/eko1.jpg",
  "images/eko2.jpg",
  "./images/eko3.jpg",
];

let currentIndex = 0; // Array of your hero images
// const moving_element = document.querySelectorAll(".moving-element"); // Ensure this selector matches your actual element
function changeHeroBackgroundImage() {
  currentIndex = (currentIndex + 1) % heroImages.length;
  console.log(currentIndex);
  var heroElement = document.querySelector(".Hero");
  // heroElement.style.backgroundImage = "url(" + heroImages[currentIndex] + ")";
  heroElement.style.backgroundImage = `url(${heroImages[currentIndex]})`;
  console.log(heroImages[currentIndex]);
}
//**********************************************************

// Change hero background image every 5 seconds (adjust the interval as needed)
setInterval(changeHeroBackgroundImage, 7000);

//change from left to right or in accending order
arrRight.addEventListener("click", () => {
  console.log(arrRight);
  currentIndex = (currentIndex + 1) % heroImages.length;
  console.log(currentIndex);
  var heroElement = document.querySelector(".Hero");
  // heroElement.style.backgroundImage = "url(" + heroImages[currentIndex] + ")";
  heroElement.style.backgroundImage = `url(${heroImages[currentIndex]})`;
});
//change from right to left or in decending order
arrLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
  console.log(currentIndex);
  var heroElement = document.querySelector(".Hero");
  // heroElement.style.backgroundImage = "url(" + heroImages[currentIndex] + ")";
  heroElement.style.backgroundImage = `url(${heroImages[currentIndex]})`;
});
// ****************************************************************************/

//Date
function makeTextEditable(element) {
  element.addEventListener("click", function () {
    const input = document.createElement("input");
    input.type = "date";
    input.className = "arrival-input";
    input.value =
      element.textContent === "Arrival Date" ? "" : element.textContent;

    // Replace the text with the input field
    element.replaceWith(input);

    // Focus on the input field
    // input.focus();
    input.style.outline = "none";

    // Handle when the user clicks outside or hits Enter to confirm the date
    input.addEventListener("blur", function () {
      const newText = document.createElement("p");
      newText.className = "pikin2";
      newText.textContent = input.value || "Arrival Date";
      input.replaceWith(newText);
      newText.style.color = "white";
      // Reattach the click event to the new paragraph
      makeTextEditable(newText);
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        input.blur(); // Trigger the blur event
      }
    });
  });
}

// Initialize the editable text
makeTextEditable(document.getElementById("arrivalText"));

//Header Toggle for Small
const smallNav = document.querySelector(".smallNav");
const toggler = document.querySelector(".toggler");
const body = document.querySelector(".bodyy");
toggler.addEventListener("click", () => {
  if (smallNav.classList.contains("hide")) {
    smallNav.classList.remove("hide");
    smallNav.classList.add("expanded");
  } else {
    smallNav.classList.add("hide");
    smallNav.classList.remove("expanded");
  }
});

// // Header Toggle for Small
// const smallNav = document.querySelector(".smallNav");
// const toggler = document.querySelector(".toggler");

// toggler.addEventListener("click", () => {
//   smallNav.classList.toggle("expanded");
// });

// //EKO
// const Eko = document.querySelectorAll(".Eko");
// console.log(Eko);
// const eko = document.querySelectorAll(".eko");
// console.log(eko);

// for (j = 0; j < Eko.length; j++) {
//   Eko[j].addEventListener("mouseover", () => {
//     for (i = 0; i < eko.length; i++) {
//       eko[i].style.top = "1rem";
//     }
//   });
// }
//************************************************************ */

const dots = document.querySelectorAll(".dot");
const slides = document.querySelector(".slides");

// Function to update the active dot based on index
function updateActiveDot(index) {
  // Remove active class from all dots
  dots.forEach((dot) => dot.classList.remove("bg-gray-700"));

  // Add active class to the clicked/current dot
  dots[index].classList.add("bg-gray-700");
}

// Set the first dot as active when the page loads
updateActiveDot(0);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Move the slides by 100% for each set of 2 slides per view
    const offset = -index * 100; // Shift by 100% for each set
    console.log(offset);
    slides.style.transform = `translateX(${offset}%)`;

    // Update active dot
    updateActiveDot(index);
  });
});
