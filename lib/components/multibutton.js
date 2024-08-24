SVG.Rounded = class extends SVG.Rect({
  // Create method to proportionally scale the rounded corners
  size: (width, height) => {
    return this.attr({
      width: width,
      height: height,
      rx: height / 5,
      ry: height / 5
    })
  }
})

SVG.extend(SVG.Shape, {
  paintRed: function() {
    return this.fill('red')
  }
})

// Add a method to create a rounded rect
SVG.extend(SVG.Container, {
  // Create a rounded element
  rounded: (width, height) => {
    return this.put(new SVG.Rounded).size(width, height)
  }
})

var rounded = draw.rounded(200, 100)