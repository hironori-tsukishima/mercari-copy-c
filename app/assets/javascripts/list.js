$(function(){
  $(".mypagelist").on("mouseenter", function(){
    $(this).css({'background-color':'#e9e9e9'})
  })
  $(".mypagelist").on("mouseleave", function(){
    $(this).css({'background-color':'white'})
  })

  $(".mypagelist > fa fa-fa-chevron-right fa-chevron-right").on("mouseenter", function(){
    $(this).css({'font-size':'20px'})
  })
})
