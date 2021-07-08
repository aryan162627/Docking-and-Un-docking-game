var bg, ssimg1, ssimg2, ssimg3, ssimg4, issimg
var spacecraft
var hasDocked = false

function preload() {
  bg = loadImage("spacebg.jpg")
  ssimg1 = loadImage("spacecraft1.png")
  ssimg2 = loadImage("spacecraft2.png")
  ssimg3 = loadImage("spacecraft3.png")
  ssimg4 = loadImage("spacecraft4.png")
  issimg = loadImage("iss.png")
}



function setup() {
  createCanvas(800, 400);
  spacecraft = createSprite(285, 240)
  spacecraft.addImage(ssimg1)
  spacecraft.scale = 0.15

  iss = createSprite(330, 130)
  iss.addImage(issimg)
  iss.scale = 0.6
}

function draw() {
  background(bg);

  if (!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1, 1)
    if (keyDown("UP_ARROW")) {
      spacecraft.y = spacecraft.y - 2
    }
    if (keyDown("DOWN_ARROW")) {
      spacecraft.addImage(ssimg2)
    }
    if (keyDown("LEFT_ARROW")) {
      spacecraft.addImage(ssimg4)
      spacecraft.x = spacecraft.x - 1
    }
    if (keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(ssimg3)
      spacecraft.x = spacecraft.x + 1
    }

    if (spacecraft.y <= (iss.y + 70) && spacecraft.x <= (iss.x - 10)) {
      hasDocked = true
      fill("white")
      text("Docking Successful !", 200, 300)
    }
  }
  drawSprites();
}
