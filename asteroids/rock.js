class Rock {
  constructor() {
    this.sprite = rockSprite.image

    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height

    // generate a random number from -3 to 3
    this.dx = (Math.random() * 6) - 3
    this.dy = (Math.random() * 6) - 3

    this.size = 100
    //todo
    this.hit = false
  }
  checkForHit(laser){
    let width = this.x - laser.x
    let height = this.x - laser.y
    let hypo = Math.sqrt(width*width + height*height);
    let radOfRock = this.size/2
    let isColliding = hypo <= radOfRock
    if (isColliding) {
        this.hit = true;
        laser.hit = true;
  }
}
  step() {
    this.x += this.dx
    this.y += this.dy

    // check if this rock is out of bounds
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
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    ctx.drawImage(
      this.sprite,
      this.x - this.size/2,
      this.y - this.size/2,
      this.size,
      this.size
    )
  }
}
