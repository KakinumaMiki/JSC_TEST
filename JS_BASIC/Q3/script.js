var ul = document.getElementById('fruits');
var fruits = ['リンゴ', 'モモ', 'ミカン'];

for(var i = 0; i < fruits.length; i++ ) {
  var li = document.createElement('li');
  var text = document.createTextNode(fruits[i]);

  li.appendChild(text);
  ul.appendChild(li);
}