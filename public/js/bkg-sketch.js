console.log('nothing here...');

var rows, cols
var cellSize = 20;
var cells = []

createCellGrid = (w, h, cs) => {
  const rows = h / cs
  const cols = w / cs
  const arr = []

  for (var i = 0; i < rows; i++) {
    const y = i * (cs)
    for (var j = 0; j < cols; j++) {
      const x = j * cs
      arr.push(new cell(x, y, cs))
    }
  }

  return arr
}

setup = () => {
  var canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('bkg-sketch-holder')
  frameRate(20)

  cells = createCellGrid(width, height, cellSize)
}

draw = () => {
  for (var i = 0; i < cells.length; i++) {
    cells[i].show()
    cells[i].update()
  }
}

function cell(x, y, s, isFull){
  this.x = x
  this.y = y
  this.s = s
  this.isFull = random() > 0.9

  var fillWhenFull = 240
  var fillWhenNotFull = 248
  var f = this.isFull ? fillWhenFull : fillWhenNotFull

  this.update = () => {

    if ((mouseX >= this.x && mouseX <= this.x + this.s) && (mouseY >= this.y && mouseY <= this.y + this.s)) {
      if (!this.isFull) {
        this.isFull = true
        f = fillWhenFull
      }
    }

    if (random() > 0.995) {
      this.isFull = !this.isFull
      f = this.isFull ? fillWhenNotFull : fillWhenFull
    }

    if (this.isFull && f > fillWhenFull) {
      f -= 1
    }
    if (!this.isFull && f < fillWhenNotFull) {
      f += 1
    }

  }

  this.show = () => {
    fill(f)
    noStroke()
    rect(this.x, this.y, this.s, this.s)
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cells = createCellGrid(width, height, cellSize)
}
