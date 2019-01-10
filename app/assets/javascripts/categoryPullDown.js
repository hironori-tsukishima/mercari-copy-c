$(document).on('turbolinks:load',function(){
  function MbuildHTML(m_cate){
    var html = `<div class="categoryPullDown-MContainerItem" data-id="${m_cate.id}">
                  <a href="/toppages/middle_category_show/${m_cate.id}">${m_cate.name}</a>
                </div>`;
    return html;
  }
  function SbuildHTML(s_cate){
    var html = `<div class="categoryPullDown-SContainerItem" data-id="${s_cate.id}">
                  <a href="/toppages/small_category_show/${s_cate.id}">${s_cate.name}</a>
                </div>`;
    return html;
  }

// プルダウン全体mouseover / mouseout
  $('.headerBottomLeftCategory, .categoryPullDown').on('mouseover', function(){
    $('.categoryPullDown').addClass('toFlex');
    $('.categoryPullDown-LContainer').fadeIn(200);
  }).on('mouseout', function(){
    $('.categoryPullDown').removeClass('toFlex');
  });

// Lカテmouseover
  $('.categoryPullDown-LContainerItem').hover(function(){
    $('.categoryPullDown-SContainer').fadeOut(200);
    $('.categoryPullDown-MContainer').empty();
    $('.categoryPullDown-MContainer').fadeIn(200);
    $(this).addClass('redBack');
    var lc_val = $(this).data('id');
    $.each(gon.m_cate, function(i,m_cate) {
    if( lc_val ===  m_cate.large_category_id ){
      var html = MbuildHTML(m_cate);
    $('.categoryPullDown-MContainer').append(html);
    }
  });
  // Mカテmouseover
    $('.categoryPullDown-MContainerItem').hover(function(e){
      $('.categoryPullDown-SContainer').empty();
      $('.categoryPullDown-SContainer').fadeIn(200);
      $(this).addClass('grayBack');
      var mc_val = $(this).data('id');
      $.each(gon.s_cate, function(i,s_cate) {
      if( mc_val ===  s_cate.middle_category_id ){
        var html = SbuildHTML(s_cate);
      $('.categoryPullDown-SContainer').append(html);
      }
    });
    // Sカテnouseover / mouseout
      $('.categoryPullDown-SContainerItem').hover(function(e){
        $(this).addClass('grayBack');
      },function(){
        $(this).removeClass('grayBack');
      });
  // Mカテmouseout
    },function(){
      $(this).removeClass('grayBack');
    });
// Lカテmouseout
  },function(){
    $(this).removeClass('redBack');
  });

// カテゴリスクロール
  $('.categoryIndexWrapperHeaderLcate').on('click', function(e){
    e.preventDefault();
    var btn = $(this).data('btn');
    var pos = $('[data-target='+btn+']').offset().top - 10;
    $('html').animate({scrollTop: pos});
  });

});
