var $select_box = $('#selectBox');
var $selected = $('#selected');

$select_box.on('change', function(){
  var val = $select_box.val();
  $selected.text(val);
});