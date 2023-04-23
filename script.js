// toggle icon
let menuIcon = document.querySelectorAll('#menu-icon')
let navbar = document.querySelectorAll('.navbar')


menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach( sec => {
let top = window.scrollY;
let offset = sec.offsetTop -150;
let height =sec.offsetHeight
let id = sec.getAttribute('id')

if(top >= offset && top<offset+ height ){
    navLinks.forEach(links =>{
        links.classList.remove('active')
        document.querySelector('header nav a[href*=' + id +']').classList.add('active')

    })

}

    })
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scroll >100)
//remove toggle
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
}

ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
 ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});


 var type = new Typed('.joy', {
    strings: ["Monitoring & Evaluation Officer","Music Producer","Photographer","Music Director"],
    typeSpeed:150,
    backSpeed:100,
    loop:true
})

var moon = document.getElementById("moon")
moon.onclick = function(){
    document.body.classList.toggle("dark-theme")
}







// Preloader
window.addEventListener("load",function(){
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function(){
    document.querySelector(".preloader").style.display="none";
  },1000)
})
// Aside Navbar
const nav=document.querySelector(".nav"),
navList=nav.querySelectorAll("li"),
totalNavList=navList.length,
allSection=document.querySelectorAll(".section"),
totalSection=allSection.length;
for(let i=0;i<totalNavList;i++){
  const a=navList[i].querySelector("a");
  a.addEventListener("click",function(){
    for(let i=0;i<totalSection;i++){
      allSection[i].classList.remove("back-section");
    }
    for(let j=0; j<totalNavList;j++){
      if(navList[j].querySelector("a").classList.contains("active")){
        allSection[j].classList.add("back-section")
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth<1200){
      asideSectionTogglerBtn();
    }
  })
}
function showSection(element){
  for(let i=0;i<totalSection;i++){
    allSection[i].classList.remove("active");
  }
  const target=element.getAttribute("href").split("#")[1];
  document.querySelector("#"+target).classList.add("active")
}
const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>{
  asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
  aside.classList.toggle("open")
  navTogglerBtn.classList.toggle("open");
  for(let i=0;i<totalSection;i++){
    allSection[i].classList.toggle("open");
  }
}