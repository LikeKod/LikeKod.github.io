

$(function () {

    var mixer = mixitup('.directions_list');
  
    $('.directions_filtr_btn').on('click', function () {
      $('.directions_filtr_btn').removeClass('directions_filtr_btn_active')
      $(this).addClass('directions_filtr_btn_active')
    })


  $('.pop-up').hide(0);
  
  $('.pop-up').hide(0);
  $('.pop-up-container').hide(0);

  $('#10_in_1').click(function(){
    $('.pop-up-container-10_in_1').show(0);
    $('.pop-up-10_in_1').fadeIn(300);
    $('.directions_list_link').hide();
  });
  $('.pop-up-10_in_1 span').click(function() {
    $('.pop-up-container-10_in_1').hide(0);
    $('.pop-up-10_in_1').hide(0);
    $('.directions_list_link').show(0);
  });
    
  $('#9_in_1').click(function(){
    $('.pop-up-container-9_in_1').show(0);
    $('.pop-up-9_in_1').fadeIn(300);
    $('.directions_list_link').hide();
  });
  $('.pop-up-9_in_1 span').click(function() {
    $('.pop-up-container-9_in_1').hide(0);
    $('.pop-up-9_in_1').hide(0);
    $('.directions_list_link').show(0);
  });

  $('#styler').click(function(){
    $('.pop-up-container-styler').show(0);
    $('.pop-up-styler').fadeIn(300);
    $('.directions_list_link').hide();
  });
  $('.pop-up-styler span').click(function() {
    $('.pop-up-container-styler').hide(0);
    $('.pop-up-styler').hide(0);
    $('.directions_list_link').show(0);
  });
    
  $('#razor').click(function(){
    $('.pop-up-container-razor').show(0);
    $('.pop-up-razor').fadeIn(300);
    $('.directions_list_link').hide();
  });
  $('.pop-up-razor span').click(function() {
    $('.pop-up-container-razor').hide(0);
    $('.pop-up-razor').hide(0);
    $('.directions_list_link').show(0);
  });

  $('#liquid').click(function(){
    $('.pop-up-container-liquid').show(0);
    $('.pop-up-liquid').fadeIn(300);
    $('.directions_list_link').hide();
  });
  $('.pop-up-liquid span').click(function() {
    $('.pop-up-container-liquid').hide(0);
    $('.pop-up-liquid').hide(0);
    $('.directions_list_link').show(0);
  });

  $('#additions').click(function(){
    $('.pop-up-container-additions').show(0);
    $('.pop-up-additions').fadeIn(300);
    $('.directions_list_link').hide();
  });
  $('.pop-up-additions span').click(function() {
    $('.pop-up-container-additions').hide(0);
    $('.pop-up-additions').hide(0);
    $('.directions_list_link').show(0);
  });
    
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header_top').hasClass('header_top_open') === false) {
      $('.burger').addClass('burger_follow')
    } else {
      $('.burger').removeClass('burger_follow')
    }
  }, 0)
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header_top').toggleClass('header_top_open')
    $('.overlay').toggleClass('overlay_show')
  })
    

})



function slidesPlagin(activeSlide = 0){
  const slides = document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active')

for (const slide of slides) {
  slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
      slide.classList.remove('active')
  })
}
}

slidesPlagin(2)


