let navList = document.querySelector(".navlist");
let bar = document.querySelector(".bar");
let barI = document.querySelector(".bar i");
bar.addEventListener("click", () => {
  navList.classList.toggle("active");
  if (barI.classList.contains("fa-bars")) {
    barI.classList.replace("fa-bars", "fa-xmark");
  } else {
    barI.classList.replace("fa-xmark", "fa-bars");
  }
});
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 20);
});
