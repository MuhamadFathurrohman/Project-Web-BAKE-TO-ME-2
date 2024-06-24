let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    sections.forEach(sec =>{

      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
        navlinks.forEach(links =>{
          links.classList.remove('active')
          document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
        });
      };
    });
} 


let search = document.getElementById('search-icon');
let toggleClose = document.getElementById('close');
let searchForm = document.getElementById('search-form');

search.onclick = () =>{
  searchForm.classList.toggle('active');
}

toggleClose.onclick = () =>{
  searchForm.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
      sildesPerView: 1,
    },
    640: {
      sildesPerView: 2,
    },
    768: {
      sildesPerView: 2,
    },
    1024: {
      sildesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 4500);
}

window.onload = fadeOut;