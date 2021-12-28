$(document).ready(function(){

    // steps slick   ==============;
    $('.steps-slider').slick({
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
              }
            },
          ],
    });

    // accordion border   ==============;
    $('.accordion-item').on('click',function(){
        $(this).addClass('border').siblings().removeClass('border');
    })

    // scrollbox   ====================;
    var $container = $('#game-rank'),
    i = 1;

   $container
     .on('reach.scrollbox', function () {
       if (i < 6) {
           // emulate XHR
           window.setTimeout(function () {
            $container.append('<div class="test-div">This is a test div #' + i ++ + '</div>');
            $container.scrollbox('up<a href="https://www.jqueryscript.net/time-clock/">date</a>'); // recalculate bar height and position
           }, 300);
        }
    })
     .scrollbox({
       // position from bottom when reach.scrollbox will be triggered
       buffer: 150 
   });


   // scroll position   ==============;
  $(window).on('scroll',function(){
    var scrolling = $(this).scrollTop();

    // back to top appearance   ===========;
    if(scrolling > 200){
      $('.back-to-top').fadeIn();
    }else{
      $('.back-to-top').fadeOut();
      
    }
    // navbar positioning    ==============;
    if(scrolling > 50){
      $('nav').addClass('nav-fix');
    }else{
      $('nav').removeClass('nav-fix');
    }

  })

   // back to top action   ===========;
   $('.back-to-top').on('click',function(){
     $('html,body').animate({
       scrollTop: '0px',
     }, 1500);
   })

  //  spin tilt plugin   ==============;

  const tilt = $('.js-tilt').tilt();

  // wow js    =================;

  new WOW().init();

  // smooth momentum scrolling    ===========;

  butter.init({
    wrapperId: 'butter',
    wrapperDamper: 0.06,
    cancelOnTouch: true,
  });
  


});
