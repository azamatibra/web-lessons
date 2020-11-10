var burger = document.querySelector(".hamburger");
var nav = document.querySelector("#nav");
burger.addEventListener("click", (e) => {
  e.preventDefault();
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});
