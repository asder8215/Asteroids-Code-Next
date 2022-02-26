// game.js file

// game state
let ship = new Ship()
// todo
let keyPressed = {}
let rocks = [new Rock(), new Rock(), new Rock()]
let lasers = []


// track user input
window.addEventListener('keydown', event => {
  // todo use a better way to update/store user input
  // so that movement is continuous
  // keyPressed = {
  //    'ArrowLeft': true,
  //    'ArrowRight': false,
  //    'ArrowUp': false,
  //    'KeyP': false,
  // }
  keyPressed[event.code] = true
  /*
  if (event.code == 'ArrowLeft') {
    keyPressed['ArrowLeft'] = true
  }
  if (event.code == 'ArrowRight') {
    keyPressed['ArrowRight'] = true
  }
  if (event.code == 'ArrowUp') {
    keyPressed['ArrowUp'] = true
  }
  */
})
// track user input
window.addEventListener('keyup', event => {
  // todo use a better way to update/store user input
  // so that movement is continuous
  keyPressed[event.code] = false
})

// game loop
function loop() {
  // todo check user input to change ship's angle and speed
  // keyPressed = {
  //    'ArrowLeft': true,
  //    'ArrowRight': false,
  //    'ArrowUp': false,
  //    'KeyP': false,
  // }
  if (keyPressed['ArrowLeft'] == true) {
    ship.rotateLeft()
  }
  if (keyPressed['ArrowRight'] == true) {
    ship.rotateRight()
  }
  if (keyPressed['ArrowUp'] == true) {
    ship.thrust()
  }
  
  // todo check user input to add laser
  if (keyPressed['Space'] == true) {
    let newLaserPoint = new Laser(ship.x, ship.y, 1, 1)
    lasers.push(newLaserPoint)
  }

  // move ship over time
// change game state
ship.step();
rocks.forEach(rock => rock.step())
lasers.forEach(laser => laser.step());

//check collisions
rocks.forEach(rock => {
    lasers.forEach(laser => {
        rock.checkForHit(laser);
        console.log("laser hit rock");
    });
});

// draw all
erase();
ship.draw();
rocks.forEach(rock => rock.draw());
lasers.forEach(laser => laser.draw());


  // trigger loop
  setTimeout(loop, 1000 / 60)
}

// wait for images to load first before starting game
async function loadGame() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  await shipSprite.loaded
  await rockSprite.loaded
  loop()
}
loadGame()
