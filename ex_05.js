var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();

if (minutes < 10) {
    minutes = '0' + minutes;
}

var message = "L'heure actuelle est " + hours + ":" + minutes + ".";
document.getElementById('timeDisplay').innerText = message;
