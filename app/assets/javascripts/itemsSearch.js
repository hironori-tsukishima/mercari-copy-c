// $(document).ready(function () {
//   $(".searchBoxBtn").click(function (e) {
//     e.preventDefault();
//     inputKeyword = $(".searchBox").val();
//     inputKeywordHTML = `<p> ${inputKeyword} </p>`
//     $(".searchItemListKeyword").append(inputKeywordHTML)
//       if($(".searchBoxBtn").submit(function(){}))
//         $(".searchItemListKeyword").empty();
//   })
// })


// $(document).ready(function () {
//   function buildHTML(keyword){
//     var html = `<p> ${item.keyword} </p>`
//     return html;
//   }
//   $("#newKeyword").submit(function (e) {
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     // var inputKeywordText = $(".searchBox").val();
//     // var KeywordText = `<p> ${inputKeywordText} </p>`
//       $.ajax({
//         type: 'POST',
//         url: url,
//         data: formData,
//         dataType: 'json'
//         processData: false,
//         contentType: false
//       })
//       .done(function(data){
//         var html = buildHTML(data);
//         $(".searchItemListKeyword").append(html);
//         $(".searchBox").val('')
//       })
//       .fail(function(){
//         alert('error')
//       })
//   })
// })

// $(document).on('turbolinks:load',function(){

//   function appendItem(item) {
//     var html = `<p> ${item.keyword} </p>`
//     $(".searchItemListKeyword").append(html);
//   }

//   function appendNoitem(item) {
//     var html = `<div class="chat-group-user clearfix">
//                    <p class="chat-group-user__name">${ user }</p>
//                 </div>`
//     search_user.append(html);
//   }


//   $(".searchBoxBtn").on('submit', function(){
//     var inputKeyword = $(this).val();
//     var registerKeyword = $('.searchBox');

//       $.ajax({
//         type: 'GET',
//         url: '/items',
//         data: { keyword: input },
//         dataType: 'json'
//       })

//     .done(function(items) {
//       $(".searchItemListKeyword").empty();
//         if(items.length !== 0) {
//           items.forEach(function(item){
//             appendKeyword(item);
//           });
//         } else {
//             appendNoKeyword("一致するアイテムはありません");
//         }
//       })

//     .fail(function() {
//       alert('検索に失敗しました');
//     })
//   });

//   var addKeyword = $(".searchItemListKeyword");

//   function appendAddUser(user_id, user_name) {
//     var html = `<p> ${item.keyword} </p>`
//     addKeyword.append(html);
//   }
// })
