/*

This code is written By Vortx
Don't forget to give the credit 😁 

*/
function likeButton() {
  let heart = document.querySelector(".heart");
  let likes = document.querySelector(".likes");

  if (heart.src.match("heart.png")) {
    heart.src = "heart_red.png";
    likes.innerHTML = "Liked by you and 102 others";
  } else {
    heart.src = "heart.png";
    likes.innerHTML = "102 likes";
  }
}
