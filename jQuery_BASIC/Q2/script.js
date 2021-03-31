var $btn = $('#changeBtn');
var $box = $('#box');

$btn.on('click', function() {
  // 1行のパターン
  $box.toggleClass("active");

  // if文を使うパターン
  // if($box.hasClass("active")) { 
  //   $box.removeClass("active");
  // }else{
  //   $box.addClass("active");
  // }
});