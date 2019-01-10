// 価格範囲検索
$(function() {
  $('.searchNavListsSearchPriceSelect').change(function() {
    var val = $(this).val();

    // switch (val) {
    //   case 0:
    //     $('.minLimit').val("");
    //     $('.maxLimit').val("");
    //     break;
    //   case 1:
    //     $('.minLimit').val(300);
    //     $('.maxLimit').val(1000);
    //     break;
    //   case 2:
    //   $('.minLimit').val(1000);
    //   $('.maxLimit').val(5000);
    //   break;
    //   case 3:
    //   $('.minLimit').val(5000);
    //   $('.maxLimit').val(10000);
    //   break;
    //   case 4:
    //   $('.minLimit').val(10000);
    //   $('.maxLimit').val(30000);
    //   break;
    //   case 5:
    //   $('.minLimit').val(30000);
    //   $('.maxLimit').val(50000);
    //   break;
    //   case 6:
    //   $('.minLimit').val(50000);
    //   $('.maxLimit').val("");
    //   break;
    // }

    if( val == 0) {
      $('.minLimit').val("");
      $('.maxLimit').val("");
    }

    if( val == 1) {
      $('.minLimit').val(300);
      $('.maxLimit').val(1000);
    }

    if( val == 2) {
      $('.minLimit').val(1000);
      $('.maxLimit').val(5000);
    }

    if( val == 3) {
      $('.minLimit').val(5000);
      $('.maxLimit').val(10000);
    }

    if( val == 4) {
      $('.minLimit').val(10000);
      $('.maxLimit').val(30000);
    }

    if( val == 5) {
      $('.minLimit').val(30000);
      $('.maxLimit').val(50000);
    }

    if( val == 6) {
      $('.minLimit').val(50000);
      $('.maxLimit').val("");
    }

  })
})


// すべてcheckbox選択時、全選択
$(function() {
  $('.searchState').on('click', function() {
    $('[id^=q_status_eq_any]').prop('checked', this.checked);
  });
  $('.searchBurden').on('click', function() {
    $('[id^=q_shipping_method_eq_any]').prop('checked', this.checked);
  });
  $('.searchSchedule').on('click', function() {
    $('[id^=q_shipping_shcedule_eq_any]').prop('checked', this.checked);
  });

// ブランドインクリメンタルサーチ

//   function appendBrand(item) {
//     var html = `<div class="brandResult clearfix">
//                    <p class="brandResultName">${ item.brand }</p>
//                    <a class="brandResultNameAdd" data-brandName=${ item.brand }>追加</a>
//                 </div>`
//     $(".searchNavListsSearchBrand").append(html)
//   }

// $(".searchBrand").on('keyup', function(){
//   var input = $(this).val();
//   console.log(input);

//     $.ajax({
//     type: 'GET',
//     url: '/items/search',
//     data: { keyword: input },
//     dataType: 'json'
//     })

//     .done(function(item) {
//       $(".brandResult").empty();
//         if(item.length !== 0) {
//           user.forEach(function(item){
//             appendUser(item);
//           });
//         } else {
//             appendNoUser("一致するユーザーはいません");
//         }
//       })

//     .fail(function() {
//       alert('ユーザー検索に失敗しました');
//     })
//  })


// サイズ選択時、サイズ表示
  $('.searchNavListsSearchSizeBox').change(function() {
    var searchSize_val = $(this).val();
    $("#searchSizeId").empty();
    $(".searchSize").remove();

    if(searchSize_val == 0){
      $("#searchSizeId").empty();
      $(".searchSize").remove();
    }

    if(searchSize_val == 1){
      $.each(gon.suit, function(i,suit){
        var suit = suit
        console.log(suit);
        var html = `<div class = "searchSize" id= "searchSizeId">
                <input type = "checkbox", name="${suit.size}", ,checked_value = "${suit.id}", unchecked_value = "" >
                <label class=>${suit.size}</label></div>`
        $(".searchNavListsSearchSize").append(html);
      })
    }

    if(searchSize_val == 2){
      $.each(gon.menShoes, function(i,menShoes){
        var menShoesName = menShoes
        var html = `<div class = "searchSize" id= "searchSizeId">
                <input type = "checkbox", name=${menShoes.size}, checked_value = "${menShoes.id}", unchecked_value = "" >
                <label class=>${menShoes.size}</label></div>`
        $(".searchNavListsSearchSize").append(html);
      })
    }
  })
})


