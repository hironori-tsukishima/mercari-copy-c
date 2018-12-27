$(function(){
  $("#item_price").on("keyup", function(){
    var price = $("#item_price").val();
      if (price >= 300 && price <= 9999999){
        var charge = Math.floor(price/10);
        var benefit = Math.floor(price - charge);
        $(".itemEntryMainUpperPriceRightMiddleRight").html("¥" + charge.toLocaleString());
        $(".itemEntryMainUpperPriceRightBottomRight").html("¥" + benefit.toLocaleString());
      }
  })
})

