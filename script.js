document.querySelector(".arrow").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("nav-mobile-ex");

  document.querySelector(".arrow").classList.toggle("mdi-rotate-180");
});

// document.querySelector(".arrow-up").addEventListener("click", () => {
//   document.querySelector(".nav").style.height = "100px";
//   document.querySelector(".arrow").style.display = "block";
//   document.querySelector(".arrow-up").style.display = "none";
// });
