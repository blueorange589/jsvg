class Rounded extends SVG.Rect{
  size(width, height) {
    return this.attr({
      width: width,
      height: height,
      rx: height / 5,
      ry: height / 5
    })
  }
}

SVG.extend(SVG.Shape, {
  paintRed: function() {
    return this.fill('red')
  }
})

// Add a method to create a rounded rect
SVG.extend(SVG.Container, {
  // Create a rounded element
  rounded(width, height) {
    console.log(this)
    const el = this.put(new Rounded).size(width, height)
    
    return el
  }
})