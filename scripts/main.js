const presentBox = document.getElementById("present-box");
const present = document.getElementById("present");
const ribbon = document.getElementById("ribbon");

presentBox.addEventListener("click", function () {
  present.classList.toggle("d-none");
  ribbon.classList.toggle("d-none");
});
