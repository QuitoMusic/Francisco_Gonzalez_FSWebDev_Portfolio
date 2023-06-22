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

 function toggleNavbar() {
    var navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
  }
  
var video1 = document.querySelector('.CatchmyBreath_Screenshot');
var video2 = document.querySelector('.Weather_Dashboard');

// Function to play the first video when hovering
function playVideo1() {
  video1.play();
}

// Function to pause the first video when the hover ends
function pauseVideo1() {
  video1.pause();
  video1.currentTime = 0; // Reset video to the beginning
}

// Function to play the second video when hovering
function playVideo2() {
  video2.play();
}

// Function to pause the second video when the hover ends
function pauseVideo2() {
  video2.pause();
  video2.currentTime = 0; // Reset video to the beginning
}

// Add event listeners to start and stop the first video on hover
video1.addEventListener('mouseenter', playVideo1);
video1.addEventListener('mouseleave', pauseVideo1);

// Add event listeners to start and stop the second video on hover
video2.addEventListener('mouseenter', playVideo2);
video2.addEventListener('mouseleave', pauseVideo2);

