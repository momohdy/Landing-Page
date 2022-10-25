let navLinks = Array.from(document.querySelectorAll("li a"));

navLinks.forEach((navLink) =>
  navLink.addEventListener(
    "click",
    () => (
      navLinks.forEach((i) => {
        i.classList.remove("active");
      }),
      navLink.classList.add("active")
    )
  )
);

console.log(navLinks);

let navBar = document.querySelector(".nav-bar");

document
  .querySelector(".hamburger-btn")
  .addEventListener(
    "click",
    () => (console.log(navBar), (navBar.style.display = "flex"))
  );

document
  .querySelector(".close-navBar")
  .addEventListener("click", () => (navBar.style.display = "none"));

// validation start
let userName = document.querySelector(".name");
let userPass = document.querySelector(".password");
// userName.addEventListener("blur", () => ((userName.value === /\w[10]/  ),console.log(userName.value)));
let validName = false,
  validPass = false;

let checker = () => {
  if (userName.value !== "") {
    validName = true;
  }
  if (userPass.value !== "") {
    validPass = true;
  }
  if (validName === true && validPass === true) {
    document.querySelector(".login a").setAttribute("href", "#services");
  }
};

// console.log(document.querySelector(".name"));
document.querySelector(".name").addEventListener("blur", () => checker());

// validation end
