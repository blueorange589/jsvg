/*

const burger = jsvg.build.element({
  fill: 'white',
  rx: 4,
  width: 48,
  height: 48,
  spacing: {top:4, right: 8, bottom: 4, left: 8},
  stroke: {
    color: 'red',
    width: 1,
    type: 'solid'
  },
  arrange: 'evenly', // start, end, center, evenly
  align: 'center',
  contains: [
    {
      type: 'text',
      fill: 'pink',
      text: 'hello'
    },
    {
      type: 'text',
      text: 'Menu'
    }
  ]
})


const navbar = jsvg.build.element({
  fill: 'gray',
  spacing: {top:4, right: 4, bottom: 4, left: 4},
  elements: [burger]
})
  */
/*
const subbar = jsvg.build.element({
  fill: 'green',
  contains: {
    text: {
      align: 'center',
      'font-color': 'white',
      text: 'Welcome to jSVG site.'
    }
  }
})


const header = jsvg.build.element({
  fill: 'gray',
  components: [navbar, subbar]
})

*/

SVG.on(document, 'DOMContentLoaded', function() {

  const btn1 = jsvg.load.file('lib/svg/elementsUI/buttons/btn-1.svg').then(text => {
    const s = SVG(text)
    s.addTo(document.body)
    s.on('click', (e) => {
      e.preventDefault()
      console.log(s.children()[1])
      const t = s.children()[1].fill('#fff')
      const o = t.remember()
      console.log(o.x())
      //const r = t.attr({fill: 'black'})
      //t.animate().move(10, 10)
      //t.timeline().reverse()

      t.animate({
        duration: 400,
        when: 'now',
        swing: true,
        times: 2
      }).size(null, 20).move(10, 10).attr({ fill: '#ebe30e'})


    })
  })
  /*
  btn.addTo('#buttons')
  btnblue.addTo('#buttons')
  */

  /*
  const header = jsvg.build(layout['header'])
  const footer = jsvg.build(layout['footer'])

  header.addTo('#header')
  footer.addTo('#footer')
  */
})