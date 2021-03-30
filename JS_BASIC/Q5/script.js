var btn = document.getElementById('displayBtn');
var text = document.getElementById('inputField');
var result = document.getElementById('result');

btn.addEventListener('click', function(){
  result.innerHTML = text.value;
});