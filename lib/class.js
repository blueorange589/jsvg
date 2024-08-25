class Rounded extends SVG.Rect {
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



SVG.extend(SVG.G, {
  align(props) {
    console.log(props)
    console.log(this.children())

    const c = this.children(),
      gbox = this.bbox();
    let xPrev = xNow = yPrev = yNow = 0;

    if (c.length) {
      c.map((item, i) => {
        const size = item.bbox()

        if (props.direction === 'horizontal') {
          xNow = xPrev
          xPrev = xPrev + props.spacing + size.width;
          item.x(xNow)

          if (props.align === 'start') {
            item.y(0)
          }

          if (props.align === 'middle') {
            yNow = gbox.h / 2
            item.cy(yNow)
          }

          if (props.align === 'end') {
            item.y(gbox.h - size.h)
          }
        }

        if (props.direction === 'vertical') {
          yNow = yPrev
          yPrev = yPrev + props.spacing + size.height;
          item.y(yNow)


          if (props.align === 'start') {
            item.x(0)
          }

          if (props.align === 'middle') {
            xNow = gbox.w / 2
            item.cx(xNow)
          }

          if (props.align === 'end') {
            item.x(gbox.w - size.w)
          }
        }



      })
    }

    return props
  }
})