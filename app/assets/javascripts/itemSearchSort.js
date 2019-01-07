$(document).on('turbolinks:load',function(){
  $(".searchNavListsChoiceBox").on("change", function() {
    var listChoice_val = $(this).val();


    var curURL = document.URL;

    if(listChoice_val == 0){
    }

    if(listChoice_val == 1){
      location.href = curURL + "&sort=priceDown"
    }

    if(listChoice_val == 2){
      location.href = curURL + "&sort=priceUp"

    }

    if(listChoice_val == 3){
      location.href = curURL + "&sort=old"
    }

    if(listChoice_val == 4){
      location.href = curURL + "&sort=new"
    }

    if(listChoice_val == 5){

    }

  })
})
