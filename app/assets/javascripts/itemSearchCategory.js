$(function(){
  $("#largeCategory").on("change", function(){
    var largeCategory_val = $(this).val();
    var beginning = `<select class="searchNavListsSearchMiddleCategory" id="middlecategory">`;
    var all = `<option value="0">すべて</option>`;
    string = "";
    var end = "</select>";
      $(".searchNavListsSearchMiddleCategory").remove();
      $(".searchNavListsSearchSmallCategory").remove();


    $.each(gon.largeCategory_id, function(i,largeCategory_id){
      if(largeCategory_val == largeCategory_id.name){

          $.each(gon.middleCategory_id, function(i,middleCategory_id){
            if(largeCategory_id.id == middleCategory_id.large_category_id){
              var middle_category_name = middleCategory_id.name
              string += `<option>${middleCategory_id.name}</option>`
            }
          })

        var html = beginning + all + string + end;
        $(".searchNavListsSearchCategory").append(html);
      }

      if(largeCategory_val == 0){
        $("#middlecategory").empty();
        $("#smallcategory").empty();
        $(".searchNavListsSearchMiddleCategory").remove();
        $(".searchNavListsSearchSmallCategory").remove();
      }
    })
  })
})

$(document).on("change","#middlecategory", function(){
    var middleCategory_val = $(this).val();
    var largeCategory_val = $('.largeCategoryId').data('id');
    var beginning = `<section class="searchNavListsSearchSmallCategory id="smallcategory">`;
    string = "";
    var end = "</section>";
      $(".searchNavListsSearchSmallCategory").remove();

    $.each(gon.middleCategory_id, function(i,middleCategory_id){
      if(middleCategory_val == middleCategory_id.name && largeCategory_val == middleCategory_id.large_category_id){

          $.each(gon.smallCategory_id, function(i,smallcategory_id){
            if(middleCategory_id.id == smallcategory_id.middle_category_id){
              console.log(this);
              var small_category_name = smallcategory_id.name
              string +=
              `<div class="smallCategoryCheckbox"><input type="checkbox">${smallcategory_id.name}</div>`
              // `<%= f.check_box :status_eq_any, {multiple: true},"${smallcategory_id.name}","" %>`
            }
          })
        var html = beginning + string + end;
        $(".searchNavListsSearchCategory").append(html);
      }

      if(middleCategory_val = 0){
        $("#smallcategory").empty();
        $(".searchNavListsSearchSmallCategory").remove();
      }
    })
})

