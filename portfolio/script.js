document.addEventListener('mousemove', function(e) {
    const light = document.querySelector('.light');
    

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    light.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});
let about=document.querySelector('#about');
let view_1=document.querySelector('#view_1');
about.addEventListener('click', function() {
  view_1.scrollIntoView({ behavior: 'smooth' });
});

let experience=document.querySelector('#experience');
let view_2=document.querySelector('#view_2');
experience.addEventListener('click', function() {
  view_2.scrollIntoView({ behavior: 'smooth' });
});

let projects=document.querySelector('#projects');
let view_3=document.querySelector('#view_3');
projects.addEventListener('click', function() {
  view_3.scrollIntoView({ behavior: 'smooth' });
});


const sections = document.querySelectorAll('.info, .experience, .projects'); 
const navItems = document.querySelectorAll('.sections p');


function handleScroll() {
  let closestSectionIndex = 0;
  let minDistance = Number.MAX_VALUE;

  sections.forEach((section, index) => {
    const distanceFromTop = Math.abs(section.getBoundingClientRect().top);

    if (distanceFromTop < minDistance) {
      minDistance = distanceFromTop;
      closestSectionIndex = index;
    }
  });

  navItems.forEach((item, index) => {
    if (index === closestSectionIndex) {
      item.classList.add('active'); 
    } else {
      item.classList.remove('active'); 
    }
  });
}

document.addEventListener('scroll', handleScroll);
