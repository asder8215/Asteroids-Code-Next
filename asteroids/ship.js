// ship.js file

// define classes to track our state
class Ship {
  constructor() {
    this.sprite = shipSprite.image
    // x,y describe the center of the ship
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    // dx,dy describe the speed the ship is traveling
    this.dx = 0
    this.dy = 0
    // the angle is in radians, meaning it goes from 0 - 2*Math.PI
    this.angle = Math.PI * 1.5
    this.size = 50
  }
  rotateLeft() {
    this.angle -= 0.1
  }
  rotateRight() {
    this.angle += 0.1
  }
  thrust() {
    // x -= 1 -> equivalent to x = x - 1
    // x += 1 // equivalent to x = x + 1
    this.dx += Math.cos(this.angle) // how much to change the speed in the x direction
    this.dy += Math.sin(this.angle) // how much to change the speed in the y direction
  }
  pewpew(){
    let laserDX = Math.cos(this.angle) * 10
    let laserDY = Math.sin(this.angle) * 10
    let laser = new Laser(
      this.x, this.y, laserDX, laserDY
    )
  }
  step() {
    // move the ship position (x,y) by speed (dx,dy)
    this.x += this.dx // equivalent to this.x = this.x + this.dx
    this.y += this.dy

    // slow down the ship decreasing speed towards 0
    this.dx *= 0.98
    this.dy *= 0.98

    // if out of bound, wrap to the other side of the canvas
    if (this.x < 0) {
      this.x = canvas.width
    }
    if (this.x > canvas.width) {
      this.x = 0
    }
    if (this.y < 0) {
      this.y = canvas.height
    }
    if (this.y > canvas.height) {
      this.y = 0
    }
  }
  draw() {
    ctx.save() // this saves the context before we translate and rotate the canvas
    ctx.translate(this.x, this.y)
    ctx.rotate(this.angle)
    ctx.drawImage(this.sprite, -this.size / 2, -this.size / 2, this.size, this.size)
    ctx.restore() // this essentially undoes the translate and rotate of the canvas
  }
}
