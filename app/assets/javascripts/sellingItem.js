
$(function(){
// photoSlide
  $(".wrapperSellingItemInfoLeftSubimages").mouseenter(function(){
    var index = $(".wrapperSellingItemInfoLeftSubimages").index(this);
    var slide = (-304 * index);
    $(".wrapperSellingItemInfoLeftMainimage").animate( { left: slide + "px"},500 );
    $(".wrapperSellingItemInfoLeftSubimages").css("opacity","0.5");
    $(".wrapperSellingItemInfoLeftSubimages").eq(index).css("opacity","1")
   });

// Modal
  $('#open').on('click', function(){
    $('#mask, #modal').removeClass('hidden');
  });
  $('#mask, #cancel').on('click', function(){
    $('#mask, #modal').addClass('hidden');
  });

});
