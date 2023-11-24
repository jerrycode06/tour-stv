"use strict";

/**
 * navbar toggle
 */
let details = {};
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

//popup

function showPopup() {
  var pop = document.getElementById("myPopup");
  pop.style.display = "flex";
  pop.style.justifyContent = "space-between";

  document.getElementsByClassName("overlay")[0].style.display = "block";
}

function closePopup(e) {
  e.preventDefault();
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("dateFrom").value = "";
  document.getElementById("dateTo").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("company").value = "";
  document.getElementById("myPopup").style.display = "none";
  document.getElementsByClassName("overlay")[0].style.display = "none";
}

var popupButtons = document.querySelectorAll("#form-button");
popupButtons.forEach(function (button) {
  button.addEventListener("click", showPopup);
});

function navigateToPage2() {
  // Redirect to page2.html
  window.location.href = "page2.html#targetElement";
}

function onSubmit(e) {
  e.preventDefault();
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let from = document.getElementById("dateFrom").value;
  let to = document.getElementById("dateTo").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let company = document.getElementById("company").value;

  details = {
    source: source,
    destination: destination,
    from: from,
    to: to,
    name: name,
    email: email,
    number: number,
    company: company,
  };
  console.log(details);
  closePopup(e);
}
