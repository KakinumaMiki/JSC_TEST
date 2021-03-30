var btn = document.getElementById('displayBtn');
var text = document.getElementById('inputField');
var result = document.getElementById('result');

btn.addEventListener('click', function(){

  if (text.value.length > 10){
    result.innerHTML = '入力文字数が10文字を超えました';
  }
  // console.log(text.value.length)
})