var s=postsData=[{profile:"https://xsgames.co/randomusers/assets/avatars/male/2.jpg",name:"Alex Marshall",post_image:"https://media.istockphoto.com/id/453469507/photo/giraffe-family.jpg?s=612x612&w=0&k=20&c=MJ-Ztd-hqc-M4eyxlJcW2tK5JD054c4dG7G5BqkjVAA=",likes_count:67},{profile:"https://xsgames.co/randomusers/assets/avatars/male/3.jpg",name:"Nick Anderson",post_image:"https://amateurphotographer.com/wp-content/uploads/sites/7/2022/03/DSC_2679-acr-scaled.jpg?resize=1024,683",likes_count:79}],e=renderView=(s,e,a,t)=>`<section class="post-container">
<section class="post-top">
  <img
    src=${s}
    alt="person-image"
  />
  <h4>${e}</h4>
</section>
<img
  src=${a}
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
<aside>${t} likes</aside>
</section>`;const a=document.querySelector(".container");s.map(({profile:s,name:t,post_image:o,likes_count:i})=>{a.innerHTML+=e(s,t,o,i)});
//# sourceMappingURL=index.c807ed37.js.map
