// Navigation Menu Active Class Change on Click
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
console.log(ul);
console.log(li);
li.forEach(el => {
  el.addEventListener("click", function() {
    ul.querySelector(".active").classList.remove("active");

    el.classList.add("active");
  });
});
// *****************************************************

// *********Navigation Bar Toggle************

function navToggle() {
  console.log("called");
  const element = document.getElementById("nav-toggle");
  element.classList.toggle("active");
}
