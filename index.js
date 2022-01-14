//Fade Functions for intro section
const helloIntro = document.getElementById("hello-intro")
const nameIntro = document.getElementById("name-intro")
const descriptionIntro = document.getElementById("description-intro")
const quoteIntro = document.getElementById("quote-intro")
const navBar = document.getElementById("nav-bar")

//arr to group all the intro elements for time delayed animation
const loadArr = [helloIntro, nameIntro, descriptionIntro, quoteIntro]
//blanket function to set transitions for elements
function animationScript(target){
  target.style.transition = "opacity 3s linear"
  target.style.opacity = '1'
}

function showNav(){
  navBar.style.transform = "translateY(0%)"
}



//On load function that selects each element with a time delay.

const loadAnimations = () => {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    animationScript(loadArr[0])
  }, 1000);
  setTimeout(() => {
    animationScript(loadArr[1])
  }, 2000);
  setTimeout(() => {
    animationScript(loadArr[2])
  }, 3000);
  setTimeout(() => {
    animationScript(loadArr[3])
  }, 5000);
  setTimeout(showNav, 7000);
  //this line prevents scrolling until the animation is completed.
  setTimeout(() => {
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden"
  }, 7200)
}






//this section controls the slider button for the map/experience

const mapSelector = document.getElementById("map");
const toggleBtn = document.getElementById("toggle-btn");
const xpSelector = document.getElementById("xp-txt");

function toggleFun() {
  if (mapSelector.classList.contains("map-hidden")) {
    mapSelector.classList.remove("map-hidden");
    mapSelector.classList.add("map-showing");
    xpSelector.classList.remove("xp-showing");
    xpSelector.classList.add("xp-hidden");
    toggleBtn.innerHTML = "Click for Resume";
  } else {
    mapSelector.classList.remove("map-showing");
    mapSelector.classList.add("map-hidden");
    xpSelector.classList.remove("xp-hidden");
    xpSelector.classList.add("xp-showing");
    toggleBtn.innerHTML = "Click for Interactive Map";
  }
}


//scroll to top button function

const toTopButton = document.getElementById("to-top")
//once passed 500 scroll button appears
window.addEventListener("scroll", () => {
  if(window.scrollY > 500){
    toTopButton.style.transition = "opacity 1s linear"
    toTopButton.style.opacity = '1'

  } else { //once above 500 scroll button disappears
    toTopButton.style.transition = "opacity 1s linear"
    toTopButton.style.opacity = '0'
  }
}, false)

toTopButton.addEventListener("click", () => {
  window.scrollTo(0,0)
})
