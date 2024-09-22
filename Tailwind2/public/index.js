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
  // console.log(currentIndex);
  var heroElement = document.querySelector(".Hero");
  // heroElement.style.backgroundImage = "url(" + heroImages[currentIndex] + ")";
  heroElement.style.backgroundImage = `url(${heroImages[currentIndex]})`;
  // console.log(heroImages[currentIndex]);
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
handleResize();
// Listen to window resize and execute the function initially

// Run on load to ensure correct behavior

//small hover border
const ana = document.querySelectorAll(".ana");
// console.log(ana);
const pla = document.querySelectorAll(".pla");
// console.log(pla);

for (let i = 0; i < pla.length; i++) {
  ana[i].addEventListener("mouseover", () => {
    pla[i].style.display = "block";
  });

  ana[i].addEventListener("mouseout", () => {
    pla[i].style.display = "none";
  });
}

const slider = document.querySelector(".slider");
const dotParentBB = document.querySelector(".dotParentBB");
const handleResize2 = () => {
  const windowWidth = window.innerWidth;

  let offset = null;
  let currentPosition = 0; // Track current position globally
  const newDot = document.createElement("button");
  if (windowWidth <= 1000) {
    // if (dotParentBB.children.length < 4) {
    //   for (let i = 3; i <= 3; i++) {
    //     newDot.classList.add(
    //       "dotB",
    //       "bg-NaDot",
    //       "w-[10px]",
    //       "h-[10px]",
    //       "relative",
    //       "right-0",
    //       "md:left-3",
    //       "rounded-full"
    //     );
    //     newDot.dataset.slide = i; // Set the index
    //     dotParentBB.appendChild(newDot);
    //   }
    //   console.log(dotParentBB);
    // }
    if (dotParentBB.children.length < 4) {
      const newDot = document.createElement("button"); // Moved outside the loop
      newDot.classList.add(
        "dotB",
        "bg-NaDot",
        "w-[10px]",
        "h-[10px]",
        "relative",
        "right-0",
        "md:left-3",
        "rounded-full"
      );
      newDot.dataset.slide = 3; // Set the index directly
      dotParentBB.appendChild(newDot);
      console.log(dotParentBB);
    }

    const dotB = document.querySelectorAll(".dotB");
    dotB[0].classList.add("bg-bla");

    for (let i = 0; i < dotB.length; i++) {
      dotB[i].addEventListener("click", (e) => {
        // Remove the 'bg-bla' class from all dots and add the 'bg-NaDot' class back
        dotB.forEach((dott) => {
          dott.classList.remove("bg-bla");
          dott.classList.add("bg-NaDot");
        });

        // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
        e.target.classList.add("bg-bla");
        e.target.classList.remove("bg-NaDot");

        offset = -i * 102; // Assuming each slide takes 102px width
        slider.style.transform = `translateX(${offset}%)`;

        // Update currentPosition based on the clicked dot
        currentPosition = -offset;
      });
    }

    const nexttt = document.querySelectorAll(".nexttt");
    let slideWidth = 34; // The percentage width of each slide
    const totalSlides = document.querySelectorAll(".slideA").length; // Total number of slides
    const slidesPerView = 2; // How many slides are shown at once
    const maxPosition = (totalSlides - slidesPerView) * slideWidth;
    // console.log(maxPosition);

    for (let j = 0; j < nexttt.length; j++) {
      nexttt[j].addEventListener("click", (e) => {
        if (e.target === nexttt[0]) {
          // Move to the previous slides console.log(maxPosition);
          // console.log(maxPosition);

          currentPosition = Math.max(currentPosition - slideWidth, 0);
          console.log(currentPosition);

          if (currentPosition === 102) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[1].classList.add("bg-bla");
            dotB[1].classList.remove("bg-NaDot");
          } else if (currentPosition <= 25) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[0].classList.add("bg-bla");
            dotB[0].classList.remove("bg-NaDot");
          } else if (currentPosition >= 185) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[2].classList.add("bg-bla");
            dotB[2].classList.remove("bg-NaDot");
          }
        } else {
          // Move to the next slides

          console.log(dotB);

          currentPosition = Math.min(currentPosition + slideWidth, maxPosition);
          console.log(currentPosition);

          if (currentPosition === 102) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[1].classList.add("bg-bla");
            dotB[1].classList.remove("bg-NaDot");
          } else if (currentPosition <= 25) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[0].classList.add("bg-bla");
            dotB[0].classList.remove("bg-NaDot");
          } else if (currentPosition <= 25) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[0].classList.add("bg-bla");
            dotB[0].classList.remove("bg-NaDot");
          } else if (currentPosition >= 185) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[2].classList.add("bg-bla");
            dotB[2].classList.remove("bg-NaDot");
          } else if (currentPosition > 300) {
            console.log("Current Position exceeds 300:", currentPosition);
            console.log("Dot Array Length:", dotB.length);

            if (dotB.length > 3) {
              console.log("Dot 3 exists", dotB[3]);
              dotB.forEach((dott) => {
                dott.classList.remove("bg-bla");
                dott.classList.add("bg-NaDot");
              });
              dotB[3].classList.remove("bg-NaDot");
              dotB[3].classList.add("bg-bla");
            } else {
              console.log("Dot 3 does not exist");
            }
          }
        }
        slider.style.transform = `translateX(-${currentPosition}%)`;
      });
    }
  } else {
    while (dotParentBB.children.length > 3) {
      dotParentBB.removeChild(dotParentBB.lastChild);
    }

    const dotB = document.querySelectorAll(".dotB");
    dotB[0].classList.add("bg-bla");

    for (let i = 0; i < dotB.length; i++) {
      dotB[i].addEventListener("click", (e) => {
        // Remove the 'bg-bla' class from all dots and add the 'bg-NaDot' class back
        dotB.forEach((dott) => {
          dott.classList.remove("bg-bla");
          dott.classList.add("bg-NaDot");
        });

        // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
        e.target.classList.add("bg-bla");
        e.target.classList.remove("bg-NaDot");

        offset = -i * 102; // Assuming each slide takes 102px width
        slider.style.transform = `translateX(${offset}%)`;

        // Update currentPosition based on the clicked dot
        currentPosition = -offset;
      });
    }

    const nexttt = document.querySelectorAll(".nexttt");
    let slideWidth = 25.5; // Default slide width for larger screens
    const totalSlides = document.querySelectorAll(".slideA").length; // Total number of slides
    const slidesPerView = 2; // How many slides are shown at once
    const maxPosition = (totalSlides - slidesPerView) * slideWidth;

    for (let j = 0; j < nexttt.length; j++) {
      nexttt[j].addEventListener("click", (e) => {
        if (e.target === nexttt[0]) {
          // Move to the previous slides
          currentPosition = Math.max(currentPosition - slideWidth, 0);
          if (currentPosition === 102) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[1].classList.add("bg-bla");
            dotB[1].classList.remove("bg-NaDot");
          } else if (currentPosition <= 25) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[0].classList.add("bg-bla");
            dotB[0].classList.remove("bg-NaDot");
          } else if (currentPosition >= 185) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[2].classList.add("bg-bla");
            dotB[2].classList.remove("bg-NaDot");
          }
        } else {
          // Move to the next slides
          console.log(currentPosition);

          currentPosition = Math.min(currentPosition + slideWidth, 205);
          if (currentPosition === 102) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[1].classList.add("bg-bla");
            dotB[1].classList.remove("bg-NaDot");
          } else if (currentPosition <= 25) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[0].classList.add("bg-bla");
            dotB[0].classList.remove("bg-NaDot");
          } else if (currentPosition >= 185) {
            dotB.forEach((dott) => {
              dott.classList.remove("bg-bla");
              dott.classList.add("bg-NaDot");
            });

            // Add the 'bg-bla' class to the clicked dot and remove 'bg-NaDot'
            dotB[2].classList.add("bg-bla");
            dotB[2].classList.remove("bg-NaDot");
          }
        }
        slider.style.transform = `translateX(-${currentPosition}%)`;
      });
    }
  }
};

handleResize2();
window.addEventListener("resize", () => {
  handleResize();
  handleResize2();
});

//Final Carocel logic
const Imagelist = [
  "./images/gallery_img1.jpg",
  "./images/gallery_img2.jpg",
  "./images/gallery_img3.jpg",
  "./images/gallery_img4.jpg",
  "./images/gallery_img5.jpg",
  "./images/gallery_img6.jpg",
  "./images/gallery_img7.jpg",
  "./images/gallery_img8.jpg",
  "./images/gallery_img9.jpg",
  "./images/gallery_img10.jpg",
  "./images/gallery_img11.jpg",
  "./images/gallery_img12.jpg",
];

const bman = document.querySelector(".bman");
const point = document.querySelectorAll(".point");
const arrRightt = document.querySelector(".arrRightt");
const arrLeftt = document.querySelector(".arrLeftt");

const badge = document.querySelector(".badge");
const outt = document.querySelector(".outt");
const picsUpdates = document.querySelector(".picsUpdates");
const slideA = document.querySelectorAll(".slideA");
const gallery = document.querySelector(".gallery");

outt.addEventListener("click", (e) => {
  const currentSlide = e.target;
  if (!badge.classList.contains("hidden")) {
    badge.classList.add("hidden");
  }
});

badge.addEventListener("click", (e) => {
  e.stopPropagation();
  const currentSlide = e.target;
  if (!badge.classList.contains("hidden")) {
    badge.classList.add("hidden");
  }
});

gallery.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent event bubbling up to badge
});

let globalIndex = null;

// Event listener for each slide in the main slider
slideA.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    // Set globalIndex to the clicked slide's index
    globalIndex = index;
    console.log(`Global Index: ${globalIndex}`);

    // Update the modal UI with the selected image and details
    picsUpdates.innerText = `Image ${index + 1}/12`;

    if (badge.classList.contains("hidden")) {
      badge.classList.remove("hidden");
    }

    // Update modal background with the corresponding image
    bman.style.background = `url(${Imagelist[index]})`;
    bman.style.backgroundSize = "cover";
    bman.style.backgroundPosition = "center";

    console.log(`Image URL: ${Imagelist[index]}`);
  });
});

// Right arrow - Move to the next image
arrRightt.addEventListener("click", (e) => {
  if (globalIndex < Imagelist.length - 1) {
    globalIndex++; // Increment the global index
    bman.style.background = `url(${Imagelist[globalIndex]})`;
    bman.style.backgroundSize = "cover";
    bman.style.backgroundPosition = "center";

    // Update the caption with the new image index
    picsUpdates.innerText = `Image ${globalIndex + 1}/12`;
    console.log(`Moved to Image ${globalIndex + 1}`);
  } else {
    console.log("Reached the last image.");
  }
});

// Left arrow - Move to the previous image
arrLeftt.addEventListener("click", (e) => {
  if (globalIndex > 0) {
    globalIndex--; // Decrement the global index
    bman.style.background = `url(${Imagelist[globalIndex]})`;
    bman.style.backgroundSize = "cover";
    bman.style.backgroundPosition = "center";

    // Update the caption with the new image index
    picsUpdates.innerText = `Image ${globalIndex + 1}/12`;
    console.log(`Moved to Image ${globalIndex + 1}`);
  } else {
    console.log("Reached the first image.");
  }
});
