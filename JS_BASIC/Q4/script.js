var ul = document.getElementById('fruits');
var fruits = ['リンゴ', 'モモ', 'ミカン'];

function generateLi(array) {
  for(var i = 0; i < array.length; i++){
    var li = document.createElement('li');
    var text = document.createTextNode(array[i]);
    li.appendChild(text);
    ul.appendChild(li);
  }
}

generateLi(fruits);