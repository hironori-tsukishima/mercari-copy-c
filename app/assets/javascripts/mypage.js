$(document).on('turbolinks:load', function(){

  $(function(){
    $(".activeTop").on("click", function(){
      var index =$(".activeTop").index(this);
      $(".listBox p").css("display","none");
      $(".listBox p").eq(index).css("display","block");
      $(".clicked").removeClass('clicked').css("background-color","#eee");
      $(this).addClass('clicked').css("background-color","white");
    });
  });

  $(function(){
    $(".activeBottom").on("click", function(){
      var index =$(".activeBottom").index(this);
      $(".listBoxBottom p").css("display","none");
      $(".listBoxBottom p").eq(index).css("display","block");
      $(".selected").removeClass('selected').css("background-color","#eee");
      $(this).addClass('selected').css("background-color","white");
    });
  });

});
