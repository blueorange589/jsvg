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

jsvg.resizeButton = (draw, opts) => {
  const g = draw.first(),
  rect = g.first(),
  t = g.last(),
  tds = t.bbox()
  rds = rect.bbox()
  
  const {spacingX, spacingY} = opts,
  rectW = tds.width + (spacingX*2),
  rectH = tds.height + (spacingY*2)
  
  // set width
  rect.attr({width:rectW , height:rectH})
  g.attr({width:rectW , height:rectH})
  
  // text center
  t.center((rectW/2), (rectH/2))
  
  return {rectW, rectH}
}


jsvg.button = (props) => {
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






var btn = draw.xml('<g transform="translate(100 0)"><rect width="103" height="36" rx="4" transform="translate(0 0)" fill="#f0f0f0" stroke="#e0e0e0" stroke-width="1"></rect><text transform="translate(25 23)" fill="#1f1f1f" font-size="14" font-family="Roboto-Medium,Roboto" ><tspan x="0" y="0">Button 3</tspan></text></g>')
      draw.get(1).first().attr('width', '140')
      
      btn.click(function() {
        draw.get(1).last().attr('transform', 'translate(35 23)')
        rect.fill({ color: 'green' })
      })