const btn = jsvg.button({
  stretch: false,
  size: 'md',
  'stroke-width': 1
})

const btnblue = jsvg.button({
  fill: 'blue',
  'font-color': 'white',
  stretch: false,
  size: 'md',
  stroke: 'red',
  'stroke-width': 2
})

const layout = {
  'header': {
    'navbar': {
      fill: 'blue',
      'font-color': 'white',
      contains: {
        'logo': {
          'fill': 'black',
          'align': 'left'
        },
        'searchbar': {
          'align': 'center'
        },
        'burger': {
          fill: 'pink',
          'align': 'right',
          events: {
            click: app.displayMenu
          }
        },
      }
    }
  }
}