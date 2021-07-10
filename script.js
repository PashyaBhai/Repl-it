function startClock() {
  var angle = 360/60;
  var date = new Date();
  var hour = date.getHours();
  if(hour > 12) {
    hour = hour - 12;
  }
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var hourAngle = (360/12)*hour + (360/(12*60))*minute;
  $('minute').setStyle('-webkit-transform: rotate('+angle*minute+'deg)');
  $('second').setStyle('-webkit-transform: rotate('+angle*second+'deg)');
  $('hour').setStyle('-webkit-transform: rotate('+hourAngle+'deg)');
}