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
    document.body.style.overflowX = "hidden";
    document.body.classList.remove("no-scroll")

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


// Start of Darkmode/functionality

const darkModeButton = document.getElementById("dark-mode")
const darkModeIcon = document.getElementById("dark-mode-icon")
const instaImage = document.getElementById("insta-img")
const linkedinImage = document.getElementById("linkedin-img")
const githubImage = document.getElementById("github-img")
const cgButton = document.getElementById("coast-guard-button")
const gcButton = document.getElementById("green-coast-button")
const disneyButton = document.getElementById("disney-button")
const mobileDarkModeButton = document.getElementById("mobile-dark-mode-icon")
const mobileDarkModeIcon = document.getElementById("mobile-dark-mode-icon")
const jobsButtonArr = [cgButton, gcButton, disneyButton]


function changeIcon() {
  if (darkModeIcon.className === "sun"){
    darkModeIcon.src = "/assets/moon-black.png"
    darkModeIcon.className = "moon"
    mobileDarkModeIcon.src = "/assets/moon-black.png"
    mobileDarkModeIcon.className = "moon"
    document.body.style.backgroundColor = "var(--bg-color-inversed)"
    document.body.style.color = "var(--clr-main-inversed)"
    //changes images color
    instaImage.src = "assets/icons8-instagram-96-black.png"
    linkedinImage.src = "assets/icons8-linkedin-96-black.png"
    githubImage.src = "assets/icons8-github-96-black.png"
    //job button changes
    for (var i = 0; i < jobsButtonArr.length; i++){
      jobsButtonArr[i].style.backgroundColor = "var(--bg-color-inversed)"
    }
    for (var i = 0; i < jobsButtonArr.length; i++){
      jobsButtonArr[i].style.color = "var(--clr-main-inversed)"
    }
    //Job Experience force color change
    //Lazy way to my transition issue.
    //Take these away and they will transition not snap change
    //they literally wont work in a loop either ????????
    //title and date
    document.getElementById("job").style.color = "var(--clr-main-inversed)"
    document.getElementById("date").style.color = "var(--clr-main-inversed)"
    //positions
    document.getElementById("position-1").style.color = "var(--clr-main-inversed)"
    document.getElementById("position-2").style.color = "var(--clr-main-inversed)"
    document.getElementById("position-3").style.color = "var(--clr-main-inversed)"
    //paragraphs
    document.getElementById("paragraph-1").style.color = "var(--clr-main-inversed)"
    document.getElementById("paragraph-2").style.color = "var(--clr-main-inversed)"
    document.getElementById("paragraph-3").style.color = "var(--clr-main-inversed)"
  } else {
    darkModeIcon.src = "/assets/sun-warm.png"
    darkModeIcon.className = "sun"
    mobileDarkModeIcon.src = "/assets/sun-warm.png"
    mobileDarkModeIcon.className = "sun"
    document.body.style.backgroundColor = "var(--bg-color)"
    document.body.style.color = "var(--clr-main)"
    //changes images colors
    instaImage.src = "assets/icons8-instagram-96-white.png"
    linkedinImage.src = "assets/icons8-linkedin-96-white.png"
    githubImage.src = "assets/icons8-github-96-white.png"
    //job button color change
    for (var i = 0; i < jobsButtonArr.length; i++){
      jobsButtonArr[i].style.backgroundColor = "var(--bg-color)"
    }
    for (var i = 0; i < jobsButtonArr.length; i++){
      jobsButtonArr[i].style.color = "var(--clr-main)"
    }
    //Job Experience force color change
    //Lazy way to my transition issue.
    //Take these away and they will transition not snap change
    //they literally wont work in a loop either ????????
    //title and date
    document.getElementById("job").style.color = "var(--clr-main)"
    document.getElementById("date").style.color = "var(--clr-main)"
    //positions
    document.getElementById("position-1").style.color = "var(--clr-main)"
    document.getElementById("position-2").style.color = "var(--clr-main)"
    document.getElementById("position-3").style.color = "var(--clr-main)"
    //paragraphs
    document.getElementById("paragraph-1").style.color = "var(--clr-main)"
    document.getElementById("paragraph-2").style.color = "var(--clr-main)"
    document.getElementById("paragraph-3").style.color = "var(--clr-main)"
  }
}

darkModeButton.addEventListener("click", changeIcon)
mobileDarkModeButton.addEventListener("click", changeIcon)


// End of Dark Mode 

//Start of work experience buttons 

const jobs = [
  {
    job: "United States Coast Guard",
    title: "Boatswain’s Mate 2nd Class (E-5)",
    date: "April 2016 - April 2020",
    positions: ["Coxswain", "Boarding Officer","Officer of the Day"],
    positionInfo: [
  "In the United States Coast Guard, the coxswain is the person in charge of a small boat and its crew. The coxswain has the authority to direct all boat and crew activities during the mission and can modify planned missions to provide for the safety of the boat and the crew. At station Chatham, I earned the privilege of being a certified coxswain on the multiple boat types which were valued up to a million dollars. <strong>I accumulated more than 200 underway hours as a coxswain and completed a multitude of missions including, training unit personnel underway, assisting distressed boaters, and medical emergencies. </strong>",
"Coast Guard Boarding Officers are responsible for leading, directing and training Maritime Law Enforcement Teams. To become a Boarding Officer, you must complete 6 weeks of law enforcement training at the Federal Law Enforcement Training Center (FLETC) in Charleston, South Carolina. During this training you are exposed to the authority and jurisdictions of Coast Guard law enforcement, local and international maritime laws and statutes, as well as critical stress management and decision making in deadly force situations. <strong>As a Boarding Officer I lead law enforcement teams in over 50 recreational boating safety boardings and more than 35 Maritime Security and Response Operations.</strong>",
"The Officer of the Day (OOD) is responsible for supervising, planning, and executing the daily activities at the unit. The OOD must have critical thinking and extensive knowledge of each mission the unit preforms. During the duty period, which ranges from 48 to 72 hours, the OOD must maintain the unit’s readiness to respond to a multitude of missions during <strong>all</strong> hours of that duty period. The OOD must also have fluid and effective planning to balance training personnel and maintaining unit readiness for missions. This includes maintaining proper boat crews and law enforcement teams that are ready to undertake and complete any mission that may come up. <strong>As the Officer of the Day, I planned and executed upwards of 50 law enforcement events, 7 search and rescue cases, and the training and certification of 10 junior personnel in a collection of qualifications. </strong>"]
    
  },
  {
    job: "GreenCoast Hydroponics",
    title: "IT Support Specialist",
    date: "September 2020 - July 2021",
    positions: ["IT Support Specialist", "Projects"],
    positionInfo:["While at GreenCoast Hydroponics, I worked on a 2 person IT team that served 11 store locations, a headquarters and a work from home fleet, combined this summed up to be over 75 workstations and 5 servers. I swiftly became proficient in technologies like NCR Counterpoint, Active Directory, Sonicwall VPNs and Firewalls. <strong>In less than a month I was trusted to solely take control of the helpdesk allowing the Director of Technology to take a hands-off approach to day-to-day support and focus on future deployments and upgrades.</strong> ",
  "In addition to daily helpdesk support, I participated, planned and executed various projects including: <br><br><strong>Adaptation of the Help Desk</strong>: Before joining the team, there was no help desk or ticketing system since the Director of Technology was the only support for the company. Once I was hired, I was assigned with the company adaptation of a help desk ticketing system. During this time, I created the operating standards for the ticketing system and educated the company on those new standards and use of the ticketing system (ZenDesk). I set up auto forwarding to the Zendesk ticketing system as well as automated replies for solved tickets. This benefited the IT department with an organization tool increasing our response time and rate on tickets. <br><br> <strong>Development + Deployment of new Ad Displays: </strong> With the current ad displays being run by Apple TVs, it was not effective to have the display rendered unusable when a remote was lost. I was tasked to develop and deploy a new process for ad displays. I developed a way for us to display, change and update ads using a Raspberry Pi Zero W. I set each up for SSH access so we could access them from anywhere. This deployment lowered the company’s operating cost from $150 per ad display to $10.<br><br><strong>Deployment of NCR Counterpoint v8.5:</strong> During off hours, over the course of multiple months, we staged upgraded point of sales clients at all locations and stores. On deployment day, I was personally responsible to ensure all personnel were educated on and using the new NCR Client."]

  },
  {
    job: "The Walt Disney Company",
    title: "Lifeguard + Lifeguard Trainer",
    date: "April 2014 - February 2016",
    positions: ["Lifeguard", "Lifeguard Trainer"],
    positionInfo: []
  }
]

//button functions for each job

function showCoastGuard(){
  //top information on job
  document.getElementById("job").innerHTML = jobs[0].job
  document.getElementById("title").innerHTML = jobs[0].title
  document.getElementById("date").innerHTML = jobs[0].date
  //titles
  document.getElementById("position-1").innerHTML = jobs[0].positions[0]
  document.getElementById("position-2").innerHTML = jobs[0].positions[1]
  document.getElementById("position-3").innerHTML = jobs[0].positions[2]
  //descriptions
  document.getElementById("paragraph-1").innerHTML = jobs[0].positionInfo[0]
  document.getElementById("paragraph-2").innerHTML = jobs[0].positionInfo[1]
  document.getElementById("paragraph-3").innerHTML = jobs[0].positionInfo[2]
  //selector afterglow
  document.getElementById("coast-guard-button").classList.add("glowing")
  document.getElementById("green-coast-button").classList.remove("glowing")
  document.getElementById("disney-button").classList.remove("glowing")

}

function showGreenCoast(){
  //top information on job
  document.getElementById("job").innerHTML = jobs[1].job
  document.getElementById("title").innerHTML = jobs[1].title
  document.getElementById("date").innerHTML = jobs[1].date
  //titles
  document.getElementById("position-1").innerHTML = jobs[1].positions[0]
  document.getElementById("position-2").innerHTML = jobs[1].positions[1]
  document.getElementById("position-3").innerHTML = ""
  //descriptions
  document.getElementById("paragraph-1").innerHTML = jobs[1].positionInfo[0]
  document.getElementById("paragraph-2").innerHTML = jobs[1].positionInfo[1]
  document.getElementById("paragraph-3").innerHTML = ""
  //afterglow
  document.getElementById("green-coast-button").classList.add("glowing")
  document.getElementById("coast-guard-button").classList.remove("glowing")
  document.getElementById("disney-button").classList.remove("glowing")
}
function showDisney(){
  //top information on job
  document.getElementById("job").innerHTML = jobs[2].job
  document.getElementById("title").innerHTML = jobs[2].title
  document.getElementById("date").innerHTML = jobs[2].date
  //titles
  document.getElementById("position-1").innerHTML = jobs[2].positions[0]
  document.getElementById("position-2").innerHTML = jobs[2].positions[1]
  document.getElementById("position-3").innerHTML = ""
  //descriptions
  document.getElementById("paragraph-1").innerHTML = jobs[2].positionInfo[0]
  document.getElementById("paragraph-2").innerHTML = jobs[2].positionInfo[1]
  document.getElementById("paragraph-3").innerHTML = ""
  //afterglow
  document.getElementById("disney-button").classList.add("glowing")
  document.getElementById("green-coast-button").classList.remove("glowing")
  document.getElementById("coast-guard-button").classList.remove("glowing")
}

document.getElementById("coast-guard-button").addEventListener("click", showCoastGuard)
document.getElementById("green-coast-button").addEventListener("click", showGreenCoast)
document.getElementById("disney-button").addEventListener("click", showDisney)


const mobileMenu = document.getElementById("mobile-nav")

document.getElementById("hamburger").addEventListener("click", ()=>{
  if (mobileMenu.classList.contains("mobile-hidden")) {
    mobileMenu.classList.replace("mobile-hidden", "mobile-showing")
    console.log("should be showing")
  } else {
    mobileMenu.classList.replace("mobile-showing", "mobile-hidden")
  }
})