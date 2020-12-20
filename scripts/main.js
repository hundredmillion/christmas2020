const presentBox = document.getElementById("present-box");
const present = document.getElementById("present");
const ribbon = document.getElementById("ribbon");

presentBox.addEventListener("click", function () {
  present.classList.remove("d-none");
  ribbon.classList.add("d-none");
});
