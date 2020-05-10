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

});