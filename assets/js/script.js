// Making a skills Chart
var ctx2 = document.getElementById('myChart2')
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["HTML", "CSS", "JS", "Bootstrap", "PHP", "React", "Nodejs","Nextjs","WP","DB","GitHub"],
    datasets: [ { 
      data: [80,55,60,40,65,90,35,30,44,80,55],
      label: "Skills",
      barThickness: 6,
      borderColor: "mediumaquamarine",
      backgroundColor: "mediumaquamarine",
      borderWidth:2,
    }
    ]
  },
  options: {

    scales: {
     xAxes: [{ 
      stacked: true ,
      ticks: {
        fontColor: "white",
        stepSize: 1,
        beginAtZero: true
      } ,
      gridLines: {
        display:false
      }
    }],
     yAxes: [{
      stacked:true,
      ticks: {
        fontColor: "white",
      },
      gridLines: {
        display:false
      }
    }],
   }
 }
});

   // Animations using Gsap
// services

const servicesbtn = document.querySelector(".servicesbtn");
servicesbtn.addEventListener("click", () => {

  gsap.fromTo(
    ".services-section",
    { x: 0, opacity: 1, display: "block" },
    { x: 200, opacity: 0, display: "none", duration: 1 }
    );
  gsap.fromTo(
    ".services-section",
    { x: -200, opacity: 0, display: "block" },
    { x: 0, opacity: 1, display: "block", duration: 1 }
    );
});
  // conatact Us
const contactbtn = document.querySelector(".contactbtn");
contactbtn.addEventListener("click", () => {

  gsap.fromTo(
    ".contact-section",
    { x: 0, opacity: 1, display: "block" },
    { x: 200, opacity: 0, display: "block", duration: 1 }
    );
  gsap.fromTo(
    ".contact-section",
    { x: 200, opacity: 0, display: "none" },
    { x: 0, opacity: 1, display: "block", duration: 1 }
    );
});
  // Skills
const skillsbtn = document.querySelector(".skillsbtn");
skillsbtn.addEventListener("click", () => {

  gsap.fromTo(
    ".skills-section",
    { y: 0, opacity: 1, display: "block" },
    { y: 150, opacity: 0, display: "block", duration: 1 }
    );
  gsap.fromTo(
    ".skills-section",
    { y: 150, opacity: 0, display: "none" },
    { y: 0, opacity: 1, display: "block", duration: 1 }
    );
});
  // About
const button = document.querySelector(".btnn");
button.addEventListener("click", () => {
  gsap.fromTo(
    ".about-section",
    { y: 2, opacity: 1, display: "block" },
    { y: 0, opacity: 0, display: "block", duration: 1 }
    );
  gsap.fromTo(
    ".about-section",
    { y: 0, opacity: 0, display: "none" },
    { y: 2, opacity: 1, display: "block", duration: 1 }
    );
});

document.querySelector(".about-close").addEventListener("click",() => 
{
  document.querySelector("#about").style.display = "none";
});
document.querySelector(".skills-close").addEventListener("click",() => 
{
  document.querySelector("#skills").style.display = "none";
});
document.querySelector(".contact-close").addEventListener("click",() => 
{
  document.querySelector("#contact").style.display = "none";
});
document.querySelector(".services-close").addEventListener("click",() => 
{
  document.querySelector("#services").style.display = "none";
});