var currentTime = document.getElementById('currentTime');

function time() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  currentTime.innerHTML = hour + ':' + min + ':' + sec;
}
time();
setInterval(time, 1000);