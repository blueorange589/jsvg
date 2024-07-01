/*const defaults = {
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
*/


jsvg.button = (props) => {
  return jsvg.create.component('button', props)
}


jsvg.bu2tton = (props) => {
  const opts = {...defaults, ...props}
  const draw = SVG(),
  g = draw.group(),
  rect = draw.rect(0, 0),
  t = draw.text('').attr({x:0, y:0})
  
  // init
  g.attr({ x: 0, y: 0 })
  g.add(rect)
  g.add(t)
  
  // text opts
  t.font({
    family: opts['font-family'],
    size: opts['font-size']
  })
  const ts = t.tspan(opts.text).fill(opts['font-color'])
  
  // rect opts
  const {size, fill, stroke, rx, spacing} = opts
  const gd = jsvg.resizeButton(draw, opts)
  

  
  
  


  // scale
  g.size((gd.rectW*sizes[size])/100)

  
  // rect attrs
  rect.attr({fill, stroke, rx, 'stroke-width': opts['stroke-width']})
  

  
  
  
  
  
  // events
  draw.on('click', ()=>{
    //ts.text('button')
    opts.stretch = false;
    g.size(250)
    jsvg.resizeButton(draw, opts)
  })
  
  
  
  return draw
}


