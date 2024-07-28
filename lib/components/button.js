const buttonopts = {
  icon: 'diamonds',
  text: 'edit',
  bg: '#23A6F0',
  color: 'white',
  align: 'left',
  height: 12,
  rx: 4,
  width: 'auto',
  spacing: { top: 4, right: 8, bottom: 4, left: 8 },
  items: {
    direction: 'row',
    arrange: 'start', // start, end, center, evenly
    align: 'center',
  },
  stroke: {
    color: 'gray',
    width: 1,
    type: 'solid'
  }
}


jsvg.button = async (props) => {
  const o = { ...buttonopts, ...props }
  const { height, color } = o
  const icon = await jsvg.load.icon(o.icon, {
    color,
    height
  })

  const text = jsvg.create.text(o.text, {
    color,
    height
  })


  const btn = jsvg.create.element('svgtxt', {
    tag: 'button',
    fill: o.bg,
    rx: o.rx,
    width: o.width,
    spacing: o.spacing,
    stroke: o.stroke,
    items: o.items,
    contains: [icon, text],
    events: {
      click: () => {
        alert('hey')
      }
    }
  })

  return btn
}