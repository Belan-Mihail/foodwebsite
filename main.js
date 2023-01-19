let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}
// добавляем класс актив иконке поиска используя функцию онклик
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

// цдвляем класс актив при нажатии крестика 
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

//SWIPER

// открыть сайт свайпер. выбрать гет стартет
// подключить минимал (линк) и скрипт
// открыть нужную функцию (пример автоплей) выбрать CORE
// перенести соответсвующие классы (классы свайпера, свайпер врапера и свайпер слада в свой проект)
// вставить скрип свайпера в ДЖ (ниже он)

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    /* ТО ЧТО БЫЛО НЕ НУЖНО
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    ТО ЧТО БЫЛО НЕ НУЖНО */

    //! То что добавили 
    loop: true,
  });


  // создаем второй слайдер
  // копируем значение первого
  // заменияем класс сладйера mySwiper на review-slider (класс нового слайдера)
  // добавляем брейкпоинты
  // new spaceBetween

  
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
 
  /* ТО ЧТО БЫЛО НЕ НУЖНО 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  ТО ЧТО БЫЛО НЕ НУЖНО */

  //! То что добавили 
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }, 
  },
});

// LOADER

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');

}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;