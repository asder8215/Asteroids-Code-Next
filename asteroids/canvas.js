// canvas.js file

// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// loading images so we can draw them later
function loadSprite(filename) {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
  let image = new Image()
  let loaded = new Promise(readyToReturn => {
    image.onload = readyToReturn
  })
  image.src = filename
  return {
    image: image,
    loaded: loaded,
  }
}
let shipSprite = loadSprite('ship.png')
let rockSprite = loadSprite('rock.png')

// draw helpers
function erase() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

// Discussion:
// - How to add rocks?
//   - create a rock.js file
//   - similar to Ship class, we want to create Rock class
//   - but it'll be more random / not controllable (random movement and spawning)
// - How to add lasers?
//   - come from ship -> depending on where the ship is, that's where laser will start
//   - create a laser.js file containing the Laser class
