var currentTime = document.getElementById('currentTime');

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

currentTime.innerHTML = hour + ':' + min + ':' + sec;