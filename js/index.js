var windowHeight = window.innerHeight;
var halfWindowHeight = windowHeight / 2;
var letters = document.querySelectorAll('#container span');
var bounceTweens = new mojs.Timeline();

var kickSound = new Howl({urls: ['sounds/ping-pong-bounce.mp3', 'sounds/ping-pong-bounce.wav'], volume: 0.2})

function createBounceTween(i) {

  var letter = letters[i];

  return new mojs.Tween({
    delay: i * 400,
    duration: 500,
    onStart: function() {
      setTimeout(function() {
        kickSound.play();
      }, 200);
    },
    onUpdate: function(progress) {
      var bounceProgress = mojs.easing.bounce.out(progress);
      letter.style.transform = 'translateY(' + (halfWindowHeight * bounceProgress - 100) + 'px)';
    }
  });
}


for( var i=0; i < letters.length; i++ ) {
  bounceTweens.add(createBounceTween(i));
}

bounceTweens.start();

