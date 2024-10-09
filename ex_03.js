var tooltipTargets = document.querySelectorAll('.tooltip-target');

for (var i = 0; i < tooltipTargets.length; i++) {
   tippy(tooltipTargets[i], {
   animation: 'fade',
   onClickOutside: function(instance) {
   instance.hide();
        }
    });
}

function playSound() {
 var sound = document.getElementById('sound');
 sound.play();
}
