(function() {
  var TOTAL_IMAGES = 16

  // preload gifs
  for (var i = 1; i < TOTAL_IMAGES; i++) {
    var img = new Image()
    img.src = '../assets/images/gifs/' + i + '.gif'
  }

  function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function changeBg() {
    document.body.style.backgroundImage = 'url(../assets/images/gifs/' + getRand(1, TOTAL_IMAGES) + '.gif)'

    setTimeout(function() {
      changeBg()
    }, getRand(5, 15) * 1000)
  }

  changeBg()
}())
