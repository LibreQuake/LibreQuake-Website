const FPS = 30

// TODO: Pick a suitable range of Unicode, or otherwise define a const array

/*
function charRange(start, end) {
  return String.fromCharCode(

  )
}

const CHARSET = [
  
]
*/

const START_UNICODE = 0x0061
const END_UNICODE = 0x007e

// TODO: Find a way to exclude certain characters that break monospace widths
// e.g. 007F, 0081, 008D, 008F, and so on ("control" characters, usually)

function makeJumble(element) {

  var jumble = ''
  var length = element.dataset.length

  while (jumble.length < length) {
    codepoint = START_UNICODE + Math.random() * (END_UNICODE - START_UNICODE + 1)
    jumble += String.fromCharCode(codepoint)
  }

  element.innerText = jumble
}

function jumbleAll() {

  jumbles = Array.from(document.getElementsByClassName("jumble"))

  for (element of jumbles) {
    makeJumble(element)
  }

  setTimeout(
    () => {
      requestAnimationFrame(jumbleAll)
    },
    1000 / FPS
  )
}

function rollCredits() {
  // autoscroll effect
  var slider = document.querySelector(".scrollable")
  slider.scrollTop = 0
  function scrollDown() {
    slider.scrollTop += 1

    setTimeout(
      () => {
        requestAnimationFrame(scrollDown)
      },
      1000 / FPS
    )
  }
  setTimeout(function() { requestAnimationFrame(scrollDown); }, 2000);
}

function initCredits() {
  writeYear();
  jumbleAll();
  rollCredits();
}
