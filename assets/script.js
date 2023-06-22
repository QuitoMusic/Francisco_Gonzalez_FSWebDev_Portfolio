//----------------drop down menu-----------------//

function toggleNavbar() {
  var navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.classList.toggle("is-hidden");
}

//----------------Sections to scroll from navbar-----------------//
function scrollToSection1() {
  const targetSection = document.getElementById("projects");
  targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToSection2() {
  const targetSection2 = document.getElementById("devTools");
  targetSection2.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToSection3() {
  const targetSection3 = document.getElementById("socialMedia");
  targetSection3.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToSection4() {
  const targetSection4 = document.getElementById("hireMe");
  targetSection4.scrollIntoView({ behavior: "smooth", block: "start" });
}