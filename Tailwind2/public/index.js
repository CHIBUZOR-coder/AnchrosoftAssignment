const deligate = document.querySelector(".deligate");
let currentVisible = null;
const arrRight = document.querySelector(".arrRight");
// console.log(arrRight);
const arrLeft = document.querySelector(".arrLeft");


// Store the currently active SVG
let currentActiveSVG = null;

// deligate.addEventListener("click", (e) => {
//   // Check if the clicked target is an SVG or its parent span
//   if (
//     e.target.tagName === "svg" ||
//     e.target.tagName === "path" ||
//     e.target.closest(".firstt")
//   ) {
//     // Find the SVG element
//     let clickedSVG = e.target.tagName === "svg" ? e.target : e.target.closest("svg");

//     // If there's a previously active SVG, reset its stroke color
//     if (currentActiveSVG && currentActiveSVG !== clickedSVG) {
//       currentActiveSVG.setAttribute("stroke", "currentColor"); // Reset to default color
//     }

//     // Set the stroke color to red for the clicked SVG
//     clickedSVG.setAttribute("stroke", "rgb(205,162,116)");
    
//     // Update the currently active SVG
//     currentActiveSVG = clickedSVG;

//     // Find the next sibling span with class 'next'
//     let nextElement = e.target.closest(".firstt").querySelector(".next");

//     // Hide the currently visible element if it's not the clicked one
//     if (currentVisible && currentVisible !== nextElement) {
//       currentVisible.classList.add("hidden");
//     }

//     // Toggle visibility of the clicked element's next sibling
//     if (nextElement.classList.contains("hidden")) {
//       nextElement.classList.remove("hidden");
//       currentVisible = nextElement; // Update the currently visible element
//     } else {
//       nextElement.classList.add("hidden");
//       currentVisible = null; // No element is visible now
//     }
//   }
// });


deligate.addEventListener("click", (e) => {
  // Check if the clicked target is the Font Awesome icon or its parent span
  if (
    e.target.classList.contains("fa-chevron-down") ||
    e.target.closest(".svg")
  ) {
    // Find the closest parent span with class 'firstt'
    let parentSpan = e.target.closest(".firstt");

    // Find the Font Awesome icon element
    let clickedIcon = e.target.classList.contains("fa-chevron-down")
      ? e.target
      : e.target.closest(".fa-chevron-down");

    // If there's a previously active icon, reset its color
    if (currentActiveSVG && currentActiveSVG !== clickedIcon) {
      currentActiveSVG.style.color = "currentColor"; // Reset to default color
    }

    // Set the color to a specific shade for the clicked icon
    clickedIcon.style.color = "rgb(205,162,116)";

    // Update the currently active icon
    currentActiveSVG = clickedIcon;

    // Find the next sibling span with class 'next'
    let nextElement = parentSpan.querySelector(".next");

    // Hide the currently visible element if it's not the clicked one
    if (currentVisible && currentVisible !== nextElement) {
      currentVisible.classList.add("hidden");
    }

    // Toggle visibility of the clicked element's next sibling
    if (nextElement.classList.contains("hidden")) {
      nextElement.classList.remove("hidden");
      currentVisible = nextElement; // Update the currently visible element
    } else {
      nextElement.classList.add("hidden");
      currentVisible = null; // No element is visible now
    }
  }
});


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

  // Apply specific text color class based on the index
  // if (currentIndex === 1) {
  //   for (var i = 0; i < moving_element.length; i++) {
  //     moving_element[i].style.backgroundColor = "rgba(10, 8, 8, 0.2)";
  //     moving_element[i].style.color = "white";
  //   }
  // } else {
  //   for (var i = 0; i < moving_element.length; i++) {
  //     moving_element[i].style.backgroundColor = "rgba(10, 8, 8, 0.5)";
  //     moving_element[i].style.color = ""; // Reset color if needed
  //   }
  // }
}

// Change hero background image every 5 seconds (adjust the interval as needed)
setInterval(changeHeroBackgroundImage, 5000);

arrRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  console.log(currentIndex);
  var heroElement = document.querySelector(".Hero");
  // heroElement.style.backgroundImage = "url(" + heroImages[currentIndex] + ")";
  heroElement.style.backgroundImage = `url(${heroImages[currentIndex]})`;
});

arrLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
  console.log(currentIndex);
  var heroElement = document.querySelector(".Hero");
  // heroElement.style.backgroundImage = "url(" + heroImages[currentIndex] + ")";
  heroElement.style.backgroundImage = `url(${heroImages[currentIndex]})`;
});










function makeTextEditable(element) {
  element.addEventListener("click", function () {
    const input = document.createElement("input");
    input.type = "date";
    input.className = "arrival-input";
    input.value =
      element.textContent !== "Arrival Date" ? element.textContent : "";

    // Replace the text with the input field
    element.replaceWith(input);

    // Focus on the input field
    input.focus();

    // Handle when the user clicks outside or hits Enter to confirm the date
    input.addEventListener("blur", function () {
      const newText = document.createElement("p");
      newText.className = "pikin2";
      newText.textContent = input.value || "Arrival Date";
      input.replaceWith(newText);

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
