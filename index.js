import postsData from "./storage.js";
import renderView from "./view.js";

const containerDiv = document.querySelector(".container");

// IIFE
(() => {
  postsData.map(({ profile, name, post_image, likes_count }) => {
    containerDiv.innerHTML += renderView(
      profile,
      name,
      post_image,
      likes_count
    );
  });
})();

let likeIcons = document.querySelectorAll(".like-icon");
let likeCounts = document.querySelectorAll(".likes-count");

likeIcons.forEach((likeIcon, index) => {
  let likeCount = likeCounts[index];
  let likeIconIsClicked = false;

  likeIcon.addEventListener("click", () => {
    likeIconIsClicked = !likeIconIsClicked;
    likeIcon.src = likeIconIsClicked
      ? "./images/heart-filled.svg"
      : "./images/heart-empty.svg";

    // Last element child
    console.log(document.querySelector(".post-container").lastElementChild);

    // Get the count and increment/decrement accordingly
    let count = parseInt(likeCount.innerText);
    count = likeIconIsClicked ? count + 1 : count - 1;

    console.log(count);

    likeCount.textContent = `${count} likes`;

    // Render UI again
    // renderView(profile, name, post_image, count);
  });
});
