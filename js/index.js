var letters = document.querySelectorAll('#container span');

var p = letters[0];

new mojs.Tween({
  repeat: 999,
  delay: 500,
  onUpdate: function(progress) {
    var bounceProgress = mojs.easing.bounce.out(progress);
    p.style.transform = 'translateY(' + 200*bounceProgress + 'px)';
  }
})//.run();
