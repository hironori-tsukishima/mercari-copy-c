// 価格範囲検索
$(function() {
  $('.searchNavListsSearchPriceSelect').change(function() {
    var val = $(this).val();

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


// サイズ選択時、サイズ表示
  $('.searchNavListsSearchSizeBox').change(function() {
    var searchSize_val = $(this).val();
    beginning = `<div class = "searchSize" id= "searchSizeId">`
    end = `</div>`

    if(val == 0){
      $("#searchSizeId").empty();
      $(".suitSize").remove();
    }

    if(val == 1){
      $.each(gon.suitSize, function(i,suitSize){
        var suitSize_name = suitSize.name
        string += `<section>
                <input type = "checkbox", class = "">
                <label class=>${suitSize.name}</label>
                </section>`
        html = beginning + string + end
        $(".searchNavListsSearchSizeBox").append(html)
      })
    }

    if(val == 2){
    }
  })
})
    // var suit = `<div class = "suitSize" id= "suitSizeBox">
    //               <section>
    //               <input type = "checkbox", class = "suitSizeBox">
    //               <label class = suitSizeLabel > XXS以下 </label>
    //               </section>
    //               <section>
    //               <input type = "checkbox", class = "suitSizeBox">
    //               <label class = suitSizeLabel > XS(SS) </label>
    //               </section>
    //               <section>
    //               <input type = "checkbox", class = "suitSizeBox">
    //               <label class = suitSizeLabel > S </label>
    //               </section>
    //               <section>
    //               <input type = "checkbox", class = "suitSizeBox">
    //               <label class = suitSizeLabel > M </label>
    //               </section>
    //               <section>
    //               <input type = "checkbox", class = "suitSizeBox">
    //               <label class = suitSizeLabel > L </label>
    //               </section>
    //               <section>
    //               <input type = "checkbox", class = "suitSizeBox">
    //               <label class = suitSizeLabel > XL(LL) </label>
    //               </section>
    //               <section>
    //               <input type = "checkbox", class = "suitSizeBox">
    //               <label class = suitSizeLabel > 2XL(3L) </label>
    //               </section>
    //               <section>
    //               <input type = "checkbox", class = "suitSizeBox">
    //               <label class = suitSizeLabel > 3XL(4L) </label>
    //               </section>
    //               <section>
    //               <input type = "checkbox", class = "suitSizeBox">
    //               <label class = suitSizeLabel > 4XL(5L)以上 </label>
    //               </section>
    //               <section>
    //               <input type = "checkbox", class = "suitSizeBox">
    //               <label class = suitSizeLabel > FREE SIZE </label>
    //               </section>
    //               <section>
    //             </div>`

