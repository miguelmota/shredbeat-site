(function() {
  function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function changeBg() {
    document.body.style.backgroundImage = 'url(../assets/images/gifs/' + getRand(1, 16) + '.gif)'

    setTimeout(function() {
      changeBg()
    }, getRand(5, 15) * 1000)
  }

  changeBg()
}())
