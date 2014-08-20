$(document).ready(function () {
      $('.result').hide();
      $('#add-button').click(function(){
         var x = parseInt($('#x-input').val(), 10);
         var y = parseInt($('#y-input').val(), 10);
         var total = x + y;
           if(isNaN(x)){
              $('.result').html('Oops..You need to enter a number')
            }
           else if (isNaN(y)){
              $('.result').html('Oops..You need to enter a number')
            }

           else {
              $('.result').fadeIn(1000).html('<li>' + x + ' plus ' + y + ' is ' + total + '</li>');
           }
      });

      $('.result').hide();
         $('#subtract-button').click(function(){
          var x = parseInt($('#x-input').val(), 10);
          var y = parseInt($('#y-input').val(), 10);
          var difference = x - y;
            if(isNaN(x)){
              $('.result').html('Oops..You need to enter a number')
            }
            else if (isNaN(y)){
              $('.result').html('Oops..You need to enter a number')
            }
            else {  
              $('.result').fadeIn(1000).html('<li>' + x + ' minus ' + y + ' is ' + difference + '</li>');
            }
      });
});
