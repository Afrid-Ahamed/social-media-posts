import postsData from "./storage.js";
import renderView from "./view.js";

const containerDiv = document.querySelector(".container");

// IIFE
(() => {
  //   const like_icon = likeIconIsClicked
  //     ? "./images/heart-filled.svg"
  //     : "./images/heart-empty.svg";
  postsData.map(({ profile, name, post_image, likes_count }) => {
    containerDiv.innerHTML += renderView(
      profile,
      name,
      post_image,
      likes_count
    );
    // console.log(renderView(profile, name, post_image, likes_count));
  });
  //   renderView(profile);
})();

// const likeIcon = document.querySelector(".like-icon");
// const likeIconIsClicked = false;

// likeIcon.addEventListener("click", () => {
//   !likeIconIsClicked;
//   console.log(
//     likeIconIsClicked ? "./images/heart-filled.svg" : "./images/heart-empty.svg"
//   );
// });
