export default renderView = (
  profile,
  name,
  post_image,
  likes_count
) => `<section class="post-container">
<section class="post-top">
  <img
    src=${profile}
    alt="person-image"
  />
  <h4>${name}</h4>
</section>
<img
  src=${post_image}
  alt="animal"
  id="post-img"
/>
<section class="post-bottom">
  <img
    src="./images/heart-empty.svg"
    alt="like-icon"
    class="like-icon"
  />
  <img src="./images/comment.svg" alt="comment" class="comment-icon" />
  <img src="./images/share.svg" alt="share" class="share-icon" />
</section>
<aside class="likes-count">${likes_count} <span>likes</span></aside>
</section>`;
