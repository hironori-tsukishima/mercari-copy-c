

$(function(){
  $("#lc").on("change", function(){
    var lc_val = $(this).val();
    var beginning = `<select class="itemEntryMainUpperDescriptionRightSelect2" id="mc">`;
    var string = "";
    var end = "</select>";
      $(".itemEntryMainUpperDescriptionRightSelect2").remove();

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
      }
    });
  });
});

$(document).on("change","#mc", function(){
  var mc_val = $(this).val();
  var beginning = `<select class="itemEntryMainUpperDescriptionRightSelect3" id="sc", name="item[small_category_id]">`;
  var str = "";
  var end = "</select>";
    $(".itemEntryMainUpperDescriptionRightSelect3").remove();

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
    }
  })
})
