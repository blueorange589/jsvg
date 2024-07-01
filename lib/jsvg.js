const jsvg = {
  c: {},
  component: {},
  g: {},
  group: {},
  create: {},
  opts: {},
  build: {}
}
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
  stroke: '#e0e0e0',
  'stroke-width': 1,
  text: 'Button',
  'font-color': '#222',
  'font-size': 14,
  'font-family': 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  spacingX: 12,
  spacingY: 8
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
  
  const {spacingX, spacingY} = opts,
  rectW = contentSize.width + (spacingX*2),
  rectH = contentSize.height + (spacingY*2)
  
  // set width
  bg.attr({width:rectW , height:rectH})
  g.attr({width:rectW , height:rectH})
  
  // text center
  content.center((rectW/2), (rectH/2))
  
  return {rectW, rectH}
}



/* group */
jsvg.group.create = () => {
  jsvg.g = jsvg.c.group()
  jsvg.g.attr({ x: 0, y: 0 })
}

jsvg.group.add = (el) => {
  jsvg.g.add(el)
}





/* elements */
jsvg.create.text = (props) => {
  const t = jsvg.c.text('').attr({x:0, y:0})
  // text opts
  t.font({
    family: jsvg.opts['font-family'],
    size: jsvg.opts['font-size']
  })

  t.tspan(jsvg.opts.text).fill(jsvg.opts['font-color'])
  return t
}

jsvg.create.rect = (props) => {
  rect = jsvg.c.rect(0, 0)
  // rect opts
  const {size, fill, stroke, rx, spacing} = jsvg.opts
  
  // rect attrs
  rect.attr({fill, stroke, rx, 'stroke-width': jsvg.opts['stroke-width']})
  return rect
}

/* elements */
jsvg.build.button = () => {
  const r = jsvg.create.rect(),
  t = jsvg.create.text()
  jsvg.g.add(r)
  jsvg.g.add(t)

  const {size, fill, stroke, rx, spacing} = jsvg.opts
  const gd = jsvg.resize(jsvg.c, jsvg.opts)
  jsvg.g.size((gd.rectW*sizes[size])/100)


  // events
  jsvg.c.on('click', ()=>{
    //ts.text('button')
    jsvg.opts.stretch = false;
    jsvg.g.size(250)
    //jsvg.resize(jsvg.c, jsvg.opts)
  })
}

/* component */
jsvg.create.component = (type, props) => {
  jsvg.opts = {...defaults, ...props}
  jsvg.c = SVG()
  jsvg.group.create()
  jsvg.build[type]()

return jsvg.c
}