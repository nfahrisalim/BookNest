const dataBuku = [
  "Pemrograman Python",
  "Pemrograman Java",
  "Belajar Web Desain",
];

const adminUser = ["admin1", "admin2", "admin3"];
const passAdmin = ["pass1", "pass2", "pass3"];

const publicUser = ["public1", "public2", "public3"];
const passPublic = ["pass1", "pass2", "pass3"];

// Get all list items in the navigation
let list = document.querySelectorAll(".navigation li");

// Get the current page filename
let currentPage = window.location.pathname.split("/").pop();

// Function to remove hover from all and add to the current one
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

// Add event listener to highlight hovered menu item
list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Highlight the menu item based on the current page
list.forEach((item) => {
  let link = item.querySelector("a").getAttribute("href");

  if (link === currentPage) {
    item.classList.add("hovered"); // Add the hovered class to the corresponding list item
  }
});

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
