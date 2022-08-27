"use strict";

// You selected 4 out of 5
const ratingContainer = document.querySelector(".window-rating");
const thankYouContainer = document.querySelector(".window-thank-you");
const scores = document.querySelectorAll(".score");
const textThankYou = document.querySelector(".p-thank-you");
const button = document.querySelector(".btn");

scores.forEach((s) =>
  s.addEventListener("click", function (e) {
    const clicked = e.target;
    scores.forEach((sc) => sc.classList.remove("score--active"));
    clicked.classList.add("score--active");
    if (!clicked) return; // Guarde clause
    button.addEventListener("click", function () {
      ratingContainer.classList.add("display-none");
      thankYouContainer.classList.remove("display-none");
      textThankYou.textContent = `You selected ${clicked.dataset.score} out of 5`;
    });
  })
);
