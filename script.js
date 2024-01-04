var a = document.querySelector(".hamburger");
var b = document.querySelector(".all-lists");
a.addEventListener("click", () => {
  a.classList.toggle("active");
  b.classList.toggle("active");
});

