var $text = $('#inputField');
var $btn = $('#displayBtn');
var $result = $('#result');

$text.on('keyup', function() {
  var count = $text.val().length;
  if (count >= 10) {
    $btn.prop('disabled', true);
  } else {
    $btn.prop('disabled', false);
  }
});

$btn.on('click', function() {
  $result.text($text.val());
})