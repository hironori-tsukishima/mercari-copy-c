
// ミドルカテゴリーの出現
$(function(){
  $("#lc").on("change", function(){
    var lc_val = $(this).val();
    var beginning = `<select class="itemEntryMainUpperDescriptionRightSelect2" id="mc">`;
    var string = "";
    var end = "</select>";
      $(".itemEntryMainUpperDescriptionRightSelect2").remove();
      $(".itemEntryMainUpperDescriptionRightSelect3").remove();
      $(".itemBrand").remove()

    $.each(gon.l_cate, function(i,l_cate) {
      if(lc_val == l_cate.name){

          $.each(gon.m_cate, function(i,m_cate) {
            if(l_cate.id == m_cate.large_category_id){
              var m_cate_name = m_cate.name
              string += `<option>${m_cate.name}</option>`
            }
          })

        var html = beginning + string + end;
        $(".itemEntryMainUpperDescriptionRightSelect").append(html);
      };
      if(lc_val == "---"){
        $("#mc").empty()
        $(".itemEntryMainUpperDescriptionRightSelect3").remove()
        $(".itemEntryMainUpperDescriptionRightSelect2").remove()
        $(".itemEntryMainUpperDescriptionRightSelect4").remove()
        $(".itemEntryMainUpperDescriptionRightTitle4").remove()
        $(".itemBrand").remove()
      }
    });
  });
});

// スモールカテゴリーの出現
$(document).on("change","#mc", function(){
  var mc_val = $(this).val();
  var beginning = `<select class="itemEntryMainUpperDescriptionRightSelect3" id="sc", name="item[small_category_id]">`;
  var str = "";
  var end = "</select>";
    $(".itemEntryMainUpperDescriptionRightSelect3").remove();
    $(".itemEntryMainUpperDescriptionRightSelect4").remove()
    $(".itemBrand").remove()
    $(".itemEntryMainUpperDescriptionRightTitle4").remove()

  $.each(gon.m_cate, function(i,m_cate) {
    if(mc_val == m_cate.name){

        $.each(gon.s_cate, function(i,s_cate) {
          if(m_cate.id == s_cate.middle_category_id){
            var s_cate_name = s_cate.name
            str += `<option value=${s_cate.id}>${s_cate.name}</option>`
            var sc_val = $(".itemEntryMainUpperDescriptionRightSelect3").val();
          }
        })

      var html = beginning + str + end;
      $(".itemEntryMainUpperDescriptionRightSelect").append(html);
    }
    if(mc_val == "---"){
        $(".itemEntryMainUpperDescriptionRightSelect3").remove()
        $(".itemEntryMainUpperDescriptionRightSelect4").remove()
        $(".itemBrand").remove()
        $(".itemEntryMainUpperDescriptionRightTitle4").remove()
    }
  })
})


// サイズとブランドの出現
$(document).on("change","#sc", function(){
  var sc_val = $(this).val();
  var beginning = `<div class="itemEntryMainUpperDescriptionRightTitle4">サイズ
                    <span class="itemEntryMainUpperDescriptionRightTitleRequire">必須</span></div>
                   <select class="itemEntryMainUpperDescriptionRightSelect4" id="size", name="item[size]">`;
  var str = "";
  var end = "</select>";

  var brand_beginning = `<div class ="brandbox"><div class="itemEntryMainUpperDescriptionRightTitle4">ブランド
                          <span class="itemEntryMainUpperDescriptionRightTitleRequire2">任意</span></div>
                         <input class="itemBrand" id="brands" type="text" placeholder=" 例) シャネル" name="item[brand]">`;
  var brand_str = "";
  var brand_end = "</input></div>";

  $(".itemEntryMainUpperDescriptionRightSelect4").remove();
  $(".itemEntryMainUpperDescriptionRightTitle4").remove()
  $(".itemBrand").remove()

// スモールカテゴリーのidとサイズのidを取得して、一致したサイズの値を取得する
  // $.each(gon.s_cate, function(i,m_cate) {
  //   if(sc_val == s_cate.name){

  //       $.each(gon.size, function(i,size) {
  //         if(s_cate.id == size.small_category_id){
  //           var size_name = size.name
  //           str += `<option value=${size.id}>${size.name}</option>`
  //           var sc_val = $(".itemEntryMainUpperDescriptionRightSelect3").val();
  //         }
  //       })
  if(sc_val == "---"){
        $(".itemEntryMainUpperDescriptionRightSelect4").remove()
        $(".itemEntryMainUpperDescriptionRightTitle4").remove()
        $(".itemBrand").remove()
  } else{
      var html = beginning + str + end;
      $(".itemEntryMainUpperDescriptionRightSelect").append(html);

      var html2 = brand_beginning + brand_str + brand_end;
      $(".itemEntryMainUpperDescriptionRightSelect").append(html2);
  }
    }
  })
})


// ブランドのインクリメンタルサーチ

$(document).on("keyup","#brands", function(e){
  var input = $(this).val();

  function appendBrandList(brand,index) {
      console.log(index)
       var beggining = `<div class= brandSearchBox id=${index}>`
       var string = `<ul><li class="brandSearchBoxResults" data-brand-id="${ brand.id }" data-brand-name="${ brand.name }">${brand.name}<li></ul>`
       var end = `</div>`

       var html = string + end
       if ($("#1").length < 1) {
       $(".brandbox").append(beggining);
       $(".brandSearchBox").append(html);
       }
       else{
        console.log("guaaa")
        $(".brandSearchBox").append(html);
       }

       if ($(".brandSearchBoxResults") == null) {
       $(this).remove();
       }


       if ( index => 1  ){
        $(".brandSearchBox").not('#1').remove();
       }
  }


  function appendNoBrandList(brand) {
       var beggining = `<div class= brandSearchBox >`
       var string = `<ul><li class=brandSearchBoxResults>${brand}"<li></ul>`
       var end = `</div>`
       var html = beggining + string + end
       $(".brandbox").append(beggining);
       $(".brandSearchBox").append(html);
      }

      if (input.length !== 0){
        $.ajax({
          type: 'GET',
          url: '/items/new',
          data: { keyword: input },
          dataType: 'json'
         })
          .done(function(brands) {
            $(".brandSearchBoxResults").remove();
             if (brands.length !== 0) {
               brands.forEach(function(brand,index){
                appendBrandList(brand,index);
               });
             }
             else{
             appendNoBrandList("検索結果にはありません");
             }
          })
          .fail(function(brands) {
            $(".brandbox").remove()
            $(".brandSearchBox").remove()
          })
      } else {
        // $(".brandbox").empty()
        $(".brandSearchBox").empty()
      }

    $(".itemEntryMainUpperDescriptionRightSelect").on("click",".brandSearchBoxResults",function(){
      let brand_id = $(this).attr('data-brand-id');
      let brand_name = $(this).attr('data-brand-name');
      console.log(brand_id)
      console.log(brand_name)
      $(".brandbox").html(`<div class ="brandbox"><div class="itemEntryMainUpperDescriptionRightTitle4">ブランド
                          <span class="itemEntryMainUpperDescriptionRightTitleRequire2">任意</span></div><input class="itemBrand" id="brands" type="text" placeholder=" 例) シャネル" name="item[brand]" value=${brand_name}></input></div>
                          <div class= brandSearchBox id=1></div>`)

      // $(".brandSearchBox").remove();
    });
})



// インクリメンタルサーチのマウスエンターでの色変更
$(function(){
  $(".itemEntryMainUpperDescriptionRightSelect").on("mouseenter",".brandSearchBoxResults",function(){
    $(this).css({'background-color':'#75BAFF' , 'color':'white' })})
  $(".itemEntryMainUpperDescriptionRightSelect").on("mouseleave",".brandSearchBoxResults",function(){
    $(this).css({'background-color':'white' , 'color':'black'})})
})





// 商品のシッピング方法のappend

$(function(){
  $("#item_shipping_fare").on("change", function(){
    var fare_val = $(this).val();
    console.log(fare_val)
    var beginning = `<div class="itemShippingMethodTitle4">配送方法
                    <span class="itemEntryMainUpperDescriptionRightTitleRequire">必須</span></div><select class="itemEntryMainUpperDeliveryRightSelect5" id="shipping_method", , name="item[shipping_method]">`;
    var string = "";
    var end = "</select>";
      $(".itemShippingMethodTitle4").remove();
      $(".itemEntryMainUpperDeliveryRightSelect5").remove();

    var result = "";
    result += $(".itemEntryMainUpperDeliveryRightSelect5").val()
      if(fare_val == "送料込み(出品者負担)"){
        $.each(gon.shipping_method_pre, function(i,pre) {
          string += `<option>${pre}</option>`
        })
      }

      if(fare_val == "着払い（購入者負担）"){
        $.each(gon.shipping_method_arrive, function(i,arrive) {
          string += `<option>${arrive}</option>`
        })
      }

    var html = beginning + string + end;
    $(".itemEntryMainUpperDeliveryRightSelect2").append(html);
      if(fare_val == "---"){
        $(".itemShippingMethodTitle4").remove();
        $(".itemEntryMainUpperDeliveryRightSelect5").remove();
      }
  });
});
