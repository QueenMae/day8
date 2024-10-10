var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var message = "L'heure actuelle est " + hours + ":" + minutes + ".";
document.getElementById('timeDisplay').innerText = message;
