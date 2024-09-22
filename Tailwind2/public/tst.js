const slider = document.querySelector(".slider");
const dotParentBB = document.querySelector(".dotParentBB");

const handleResize2 = () => {
  const windowWidth = window.innerWidth;

  const dotB = document.querySelectorAll(".dotB");
  const nexttt = document.querySelectorAll(".nexttt");
  const slideA = document.querySelectorAll(".slideA");
  let currentPosition = 0;
  let offset = null;

  // Adjust for screen sizes <= 1000px
  if (windowWidth <= 1000) {
    if (dotParentBB.children.length < 4) {
      for (let i = 3; i <= 3; i++) {
        const newDot = document.createElement("button");
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
        newDot.dataset.slide = i;
        dotParentBB.appendChild(newDot);
      }
    }

    // Initialize dots functionality
    dotB.forEach((dot, i) => {
      dot.addEventListener("click", (e) => {
        dotB.forEach((dott) => {
          dott.classList.remove("bg-bla");
          dott.classList.add("bg-NaDot");
        });
        e.target.classList.add("bg-bla");
        e.target.classList.remove("bg-NaDot");

        currentPosition = i * 102; // Update the currentPosition when a dot is clicked
        slider.style.transform = `translateX(-${currentPosition}%)`;
      });
    });

    // Next/Prev button functionality
    const slideWidth = 34;
    const slidesPerView = 2;
    const maxPosition = (slideA.length - slidesPerView) * slideWidth;

    nexttt.forEach((btn, j) => {
      btn.addEventListener("click", (e) => {
        if (e.target === nexttt[0]) {
          currentPosition = Math.max(currentPosition - slideWidth, 0);
        } else {
          currentPosition = Math.min(currentPosition + slideWidth, maxPosition);
        }
        slider.style.transform = `translateX(-${currentPosition}%)`;
      });
    });
  } else {
    // Adjust for screens larger than 1000px
    while (dotParentBB.children.length > 3) {
      dotParentBB.removeChild(dotParentBB.lastChild);
    }

    // Initialize dots functionality for large screens
    dotB.forEach((dot, i) => {
      dot.addEventListener("click", (e) => {
        dotB.forEach((dott) => {
          dott.classList.remove("bg-bla");
          dott.classList.add("bg-NaDot");
        });
        e.target.classList.add("bg-bla");
        e.target.classList.remove("bg-NaDot");

        currentPosition = i * 102; // Update the currentPosition when a dot is clicked
        slider.style.transform = `translateX(-${currentPosition}%)`;
        offset = offset; // Store the current offset for the next button
      });
    });

    // Next/Prev button functionality for large screens
    const slideWidth = 25.5;
    const slidesPerView = 2;
    const maxPosition = (slideA.length - slidesPerView) * slideWidth;

    nexttt.forEach((btn, j) => {
      btn.addEventListener("click", (e) => {
        if (e.target === nexttt[0]) {
          currentPosition = Math.max(currentPosition - slideWidth, 0);
        } else {
          if (offset) {
            currentPosition = offset;
          }
          currentPosition = Math.min(currentPosition + slideWidth, maxPosition);
        }
        slider.style.transform = `translateX(-${currentPosition}%)`;

        if (currentPosition >= 102) {
          dotB.forEach((dott) => {
            dott.classList.remove("bg-bla");
            dott.classList.add("bg-NaDot");
          });
          dotB[1].classList.add("bg-bla");
        }
      });
    });
  }
};

handleResize2();

window.addEventListener("resize", handleResize2);








































