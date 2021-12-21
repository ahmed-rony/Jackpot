$(document).ready(function(){

    // steps slick   ==============;
    $('.steps-slider').slick({
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
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


});
