const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });

  firstBtn.addEventListener("click", (event) => {
    console.log(event.target);
  });

  // Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });

//  // Select the `nameSorter` link
// const nameSorter = document.querySelector("#name-sorter");

// // Add an event listener
// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();

//   // 1. Get the main element
//   const main = document.querySelector("main");

//   // 2. Get the list of parks
//   const parksList = main.querySelectorAll(".park-display");

//   // 3. Empty the main element
//   main.innerHTML = "";

//   // 4. Create an array
//   const parksArray = Array.from(parksList);

//   // 5. Sort the array
//   parksArray.sort((parkA, parkB) => {
//     const parkAName = parkA.querySelector("h2").innerText;
//     const parkBName = parkB.querySelector("h2").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   // 6. Insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park);
//   });
// });



// Select the `ratingSorter` link
const ratingSorter = document.querySelector("#rating-sorter");

// Add an event listener
ratingSorter.addEventListener("click", (event) => {
  event.preventDefault();

  // 1. Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating-display .value").innerText;
    console.log(parkARating)
    const parkBRating = parkB.querySelector(".rating-display .value").innerText;
    if (parkARating > parkBRating) {
      return -1;
    } else if (parkARating < parkBRating) {
      return 1;
    } else {
      return 0;
    }
  });

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});


console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");