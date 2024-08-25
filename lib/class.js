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

function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Add a method to create a rounded rect
SVG.extend(SVG.Container, {
  // Create a rounded element
  rounded(width, height) {
    const el = this.put(new Rounded).size(width, height)

    return el
  },
  border(props) {
    const k = `border${props.side?'-'+props.side:''}`,
      s = `${props.size||1}px ${props.type||'solid'} ${props.color}`;

    this.css(k, s)
  }
})



SVG.extend(SVG.G, {
  alignWith(id, a) {
    const p = this.parent(id),
      pd = p.bbox(),
      d = this.bbox();
      
    console.log(this.children(), pd.cy)
    
    //a === 'top' && this.y(pd.y)
    a === 'middle' && this.children().map((item) => item.attr({y: pd.cy}))
    // a === 'bottom' && this.y(pd.y + pd.h - d.h)
  
    return this
  },
  button(el) {
    console.log(el.icon)
    const g = this.group(),
    w = el.w || 24,
    h = el.h || 24,
    padding = 4;
    const bg = g.rect().size(w, h)
    el.bg && bg.fill(el.bg)
    el.border && bg.stroke(el.border)
    g.put(bg)
    if (el.icon) {
      g.put(el.icon)
      //.fill(el.color || '#ccc')
    }
    if (el.text) {
      g.put(el.text).fill(el.color || '#ccc')
    }
    return g.align({padding})
  },
  btn(id, props) {
    const g = this.group().id(id)
    props.icon && g.put(props.icon)
    props.text && g.put(props.text)
    
    const d = g.bbox()
    bg = g.rounded(d.cx*2,d.cy*2).dmove(d.x, d.y).back()

    bg.fill(props.bg || '#ccc')
    
    return g.alignWith('#navsvg', 'middle')
  },
  align(props) {
    const def = {
      direction: 'horizontal',
      align: 'middle',
      padding: 4,
      spacing: 4
    }
    props = {...def, ...props}
    console.log(props)
    //console.log(props)
    //console.log(this.children())

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

      if (props.padding) {
        const gdim = this.bbox()
        this.attr({ width: (gdim.w + props.padding * 2), height: (gdim.h + props.padding * 2) })
        const mv = props.padding
        this.children().dmove(mv, mv)
      }
    }

    return props
  }
})