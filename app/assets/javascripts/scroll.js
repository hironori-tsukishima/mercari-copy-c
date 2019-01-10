$(document).on('turbolinks:load', function(){
  $.each(gon.initial, function(index) {
    $('#cell' + index).on('click', function(){
      var position = $(".brandWrapperInitialsInitial" + index).offset().top;
      $('html, body').animate({scrollTop:position});
    })
  })
});
