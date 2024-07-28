const buttonopts = {
  icon: 'clubs',
  text: 'click me',
  bg: 'green',
  align: 'left',
  height: 24,
  //spacing: { top: 4, right: 8, bottom: 4, left: 8 }
}


jsvg.button = async (props) => {
  const o = {...buttonopts, ...props}
  alert(o)
  const icon = await jsvg.load.icon('clubs', { height: 32 })

  const text = jsvg.create.text('hello world', { height: 32 })


  const burger = jsvg.create.element('svgtxt', {
    fill: o.bg,
    rx: 4,
    width: 'auto',
    spacing: { top: 4, right: 8, bottom: 4, left: 8 },
    stroke: {
      color: 'gray',
      width: 1,
      type: 'solid'
    },
    items: {
      direction: 'row',
      arrange: 'start', // start, end, center, evenly
      align: 'center',
    },
    contains: [icon, text]
  })

  return burger
}