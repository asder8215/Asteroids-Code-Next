class Laser {
    constructor(laserX, laserY, laserDX, laserDY) {
      this.x = laserX
      this.y = laserY
      this.dx = laserDX
      this.dy = laserDY
      this.hit = lasers 
    }
    step() {
      this.x += this.dx
      this.y += this.dy
    }
    draw() {
      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI)
      ctx.fill()
    }
  }