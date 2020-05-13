$(document).ready(function () {

     $('.button[filter]').click(function () {
          // для кнопки all
          if ($(this).attr('filter') == 'all') {

               if ($(this).attr('val') == 'off') {
                    $('.button[filter]').attr('val', 'off'); // если кнопка в off
                    $(this).attr('val', 'on');  // меняем на on
                    // удаляем у всех класс .focused
                    $('.button[filter]').removeClass('focused');
                    // добавляем только на ту которую нажали 
                    $(this).addClass('focused');

                    $('.filter > div').show(300);
               }
               // для всех остальных кнопок 
          } else
               if ($(this).attr('val') == 'off') {

                    $('.button[filter]').attr('val', 'off');

                    $(this).attr('val', 'on');

                    $('.button[filter]').removeClass('focused');
                    $(this).addClass('focused');

                    $('.filter > div').hide(300);

                    var filter = $(this).attr('filter');

                    $('.filter > div[filter=' + filter + ']').show(300);
               }
     })


     $('.multiple-items').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
          dotsClass: 'dots-style',
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                    }
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2
                    }
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1
                    }
               }
          ]
     });

     $('ul.menu a[href^="#"').click(function () {
          let target = $(this).attr('href');
          $('html, body').animate({
               scrollTop: $(target).offset().top
          }, 500);
          $('ul.menu a[href^="#"').css({ 'color': '#212121' });
          $(this).css({ 'color': '#004bee' });
          return false;
     });
});

