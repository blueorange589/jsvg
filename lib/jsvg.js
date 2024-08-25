const jsvg = {
  font: {},
  create: {},
  load: {},
  items: []
}

/*
opentype.load('lib/fonts/basiersquare-bold-webfont.woff', (err, font) => { jsvg.font = font }) */

opentype.load('lib/fonts/FiraSansMedium.woff', (err, font) => { jsvg.font = font })



const cfg = {
  width: window.innerWidth,
  height: window.innerHeight,
  spacing: 4
}


const defaults = {
  size: 'md',
  stretch: false,
  fill: '#f0f0f0',
  'fill-opacity': 1,
  rx: 4,
  stroke: {
    color: '#e0e0e0',
    width: 1,
    type: 'solid'
  },
  text: 'Button',
  'font-size': 14,
  'font-family': 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  width: 48,
  height: 48,
  spacing: { top: 0, right: 0, bottom: 0, left: 0 },
  items: {
    direction: 'row', // row, column
    arrange: 'evenly', // start, end, center, evenly
    align: 'center', // start, end, center
  }
}

const sizes = {
  xs: 60,
  sm: 80,
  md: 100,
  lg: 120,
  xl: 140
}


jsvg.arrange = (parent, child, direction) => {

}


jsvg.resize = (draw, opts) => {
  const g = draw.first(),
    bg = g.first(),
    content = g.last(),
    contentSize = content.bbox()
  bgSize = bg.bbox()

  const { spacingX, spacingY } = opts,
    rectW = contentSize.width + (spacingX * 2),
    rectH = contentSize.height + (spacingY * 2)

  // set width
  bg.attr({ width: rectW, height: rectH })
  g.attr({ width: rectW, height: rectH })

  // text center
  content.center((rectW / 2), (rectH / 2))

  return { rectW, rectH }
}



/* group */
/*
jsvg.group.create = () => {
  jsvg.g = jsvg.c.group()
  jsvg.g.attr({ x: 0, y: 0 })
}

jsvg.group.add = (el) => {
  jsvg.g.add(el)
}
*/




/* elements */
jsvg.create.text = (str, opts) => {
  const svg = new SVG(),
    g = svg.group()

  let pathString = '';
  const fontPaths = jsvg.font.getPaths(str, 0, 100, 100)
  const paths = fontPaths.map(fontPath => {
    let path = fontPath.toSVG();
    pathString += path;
    return pathString
  })
  g.svg(pathString).attr({
    fill: opts.color,
    height: opts.height
  })

  const gd = g.bbox()
  const w = Math.round(gd.w) + 4
  const h = Math.round(gd.h)
  svg.attr({
    viewBox: `4 26 ${w} ${h}`,
    height: opts.height || h
  })

  return svg
}

jsvg.create.rect = (svg, props) => {
  rect = svg.rect(0, 0)
  // rect opts
  const { size, fill, stroke, rx, spacing } = props

  // rect attrs
  rect.attr({ fill, stroke, rx, 'stroke-width': props['stroke-width'] })
  return rect
}


/* load file */
jsvg.load.file = async (file) => {
  const buffer = await fetch(file)
  const svg = await buffer.text()
  return svg
}

jsvg.load.icon = async (name) => {
  const path = `imports/feathericons/${name}.svg`,
    svgtext = await jsvg.load.file(path)
  return SVG(svgtext)
}


jsvg.load.icon2 = async (name, opts) => {
  // alert(opts)
  const path = `imports/feathericons/${name}.svg`,
    svgtext = await jsvg.load.file(path)
  return SVG(svgtext).attr({
    fill: opts.color,
    width: opts.height,
    height: opts.height,
    viewBox: `0 0 40 32`
  })
}

/*
jsvg.create.button = () => {
  const r = jsvg.create.rect(),
    t = jsvg.create.text()
  jsvg.g.add(r)
  jsvg.g.add(t)

  const { size, fill, stroke, rx, spacing } = jsvg.opts
  const gd = jsvg.resize(jsvg.c, jsvg.opts)
  jsvg.g.size((gd.rectW * sizes[size]) / 100)


  // events
  jsvg.c.on('click', () => {
    //ts.text('button')
    jsvg.opts.stretch = false;
    jsvg.g.size(250)
    //jsvg.resize(jsvg.c, jsvg.opts)
  })
}
*/


jsvg.create.container = (props) => {
  const tag = props.tag || 'div'
  const c = document.createElement(tag),
    { stroke, rx, width } = props,
    { top, right, bottom, left } = props.spacing

  c.classList.add('flex')
  c.classList.add(`direction_${props.items.direction}`)
  c.classList.add(`arrange_${props.items.arrange}`)
  c.classList.add(`align_${props.items.align}`)

  c.style.backgroundColor = props.fill || 'none'
  c.style.padding = `${top}px ${right}px ${bottom}px ${left}px`
  c.style.border = `${stroke.width}px ${stroke.type} ${stroke.color}`
  c.style.borderRadius = `${rx}px`
  c.style.width = width
  

  return c
}

jsvg.create.element = (targetID, props) => {
  const opts = { ...defaults, ...props },
    container = jsvg.create.container(opts),
    IDnum = Math.ceil(Math.random() * 1000000),
    parser = new DOMParser();

  container.id = `ct_${IDnum}`
  const target = document.getElementById(targetID)
  target.appendChild(container)

  // add elements
  if (opts.contains) {
    opts.contains.forEach(el => {
      const doc = parser.parseFromString(el.html(), "image/svg+xml")
      container.appendChild(doc.firstChild)
    })
  }
  
  // add events
  if (opts.events) {
    const es = Object.keys(opts.events)
    es.forEach(ev => {
      window.addEventListener(ev, opts.events[ev])
    })
  }

  return container
}