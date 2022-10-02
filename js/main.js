let openForm = document.getElementById('open');
let closeForm = document.querySelector("#close")
let formContainer = document.querySelector("#form");

openForm.addEventListener('click' , () => {
  formContainer.style.top = '1%';
})
closeForm.addEventListener('click' , () => {
  formContainer.style.top = '-150%';
})

$(document).ready(function () {
  $(".lds-hourglass").fadeOut(4000, () => {
    $("#landing").fadeOut(2000 , () => {
      $('body').css("overflow-y" , 'auto')
    });
  })
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});