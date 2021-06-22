$(document).ready(function () {
  // typing name hero animation
  var i = -1;
  var txt = "Faiz Dhiyaul Haq"; /* The text */
  var speed = 200; /* The speed/duration of the effect in milliseconds */
  function typeWriter() {
    if (i == -1) {
      setTimeout(typeWriter, 2000);
      i = 0;
    } else {
      if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  }
  typeWriter();
});
