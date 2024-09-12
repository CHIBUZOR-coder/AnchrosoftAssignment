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
setInterval(changeHeroBackgroundImage, 6000);

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

// /////
//Arrival toggler
const arriveV = document.querySelectorAll(".arriveV ");
console.log(`Afirst ${arriveV[0]}`);
console.log(`Asecond ${arriveV[1]}`);
const togglee = document.querySelectorAll(".togglee");
console.log(`first ${togglee[0]}`);
console.log(`second ${togglee[1]}`);

let currentValue;
for (let i = 0; i < togglee.length; i++) {
  togglee[i].addEventListener("click", () => {
    // currentValue = togglee[i];
    if (arriveV[i].classList.contains("hidden")) {
      arriveV[i].classList.remove("hidden");
    } else {
      arriveV[i].classList.add("hidden");
    }
    if (i === 0 && !arriveV[0].classList.contains("hidden")) {
      arriveV[1].classList.add("hidden"); // Hide the second if the first is visible
    } else if (i === 1 && !arriveV[1].classList.contains("hidden")) {
      arriveV[0].classList.add("hidden"); // Hide the first if the second is visible
    }
  });
}



// // Arrival toggler
// const arriveV = document.querySelectorAll(".arriveV");
// const togglee = document.querySelectorAll(".togglee");

// for (let i = 0; i < togglee.length; i++) {
//   togglee[i].addEventListener("click", () => {
//     // First, hide all .arriveV elements
//     arriveV.forEach((el, index) => {
//       if (index !== i) {
//         el.classList.add("hidden"); // Hide all other .arriveV elements
//       }
//     });

//     // Toggle the visibility of the clicked .arriveV element
//     arriveV[i].classList.toggle("hidden");
//   });
// }




// ***************************************************

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
// ***************************************

const slides = document.querySelector(".slides");
const dotParent = document.querySelector(".dotParent");

// Function to update the active dot based on index
function updateActiveDot(index) {
  const dots = document.querySelectorAll(".dot"); // Re-select dots
  dots.forEach((dot) => (dot.style.backgroundColor = "white")); // Ensure dots exist
  if (dots[index]) {
    dots[index].style.backgroundColor = "rgb(134,151,145)"; // Update the active dot
  }
}

// Set the first dot as active when the page loads
updateActiveDot(0);

function handleResize() {
  if (window.innerWidth <= 768) {
    console.log("Small screen: 1 slide per view");

    // Add two more dots if not already added (for 5 dots)
    if (dotParent.children.length < 5) {
      for (let i = 3; i <= 4; i++) {
        const newDot = document.createElement("button");
        newDot.classList.add(
          "dot",
          "w-[10px]",
          "h-[10px]",
          "bg-gray-300",
          "rounded-full"
        );
        newDot.dataset.slide = i; // Set the index
        dotParent.appendChild(newDot);
      }
    }

    const smallDots = document.querySelectorAll(".dot");

    smallDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        let offset = -index * 100; // Move 100% for each slide
        slides.style.transform = `translateX(${offset}%)`;
        updateActiveDot(index); // Call updateActiveDot with current index
      });
    });
  } else {
    console.log("Large screen: 2 slides per view");

    // Remove extra dots if present (ensure 3 dots only)
    while (dotParent.children.length > 3) {
      dotParent.removeChild(dotParent.lastChild);
    }

    const largeDots = document.querySelectorAll(".dot");

    largeDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        let offset;
        if (index === 2) {
          offset = -151; // Move to the last two slides
        } else {
          offset = -index * 100; // Move by 100% for two slides per view
        }
        slides.style.transform = `translateX(${offset}%)`;
        updateActiveDot(index); // Call updateActiveDot with current index
      });
    });
  }
}

// Listen to window resize and execute the function initially
window.addEventListener("resize", handleResize);
handleResize(); // Run on load to ensure correct behavior

//small hover
const ana = document.querySelectorAll(".ana");
console.log(ana);
const pla = document.querySelectorAll(".pla");
console.log(pla);

for (let i = 0; i < pla.length; i++) {
  ana[i].addEventListener("mouseover", () => {
    pla[i].style.display = "block";
  });

  ana[i].addEventListener("mouseout", () => {
    pla[i].style.display = "none";
  });
}
