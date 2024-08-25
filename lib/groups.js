const nav = SVG().addTo('#nav')
const navgroup = nav.group()
//group.path('M10,20L30,40')
const icongroup = navgroup.group().fill('#14168c')



const drawLayout = () => {
  SVG(elements.activity).addTo(icongroup).cx(64).click(function() {
    this.animate().stroke({ color: SVG.Color.random('vibrant') })
  })
  //icongroup.add(SVG(elements.activity)).x(28)
  //elements.airplay.addTo(navgroup)
  icongroup.add(elements.anchor)
  
  /*
  elements.anchor.on('click', (t) => {
    this.stroke({color: '#000'})
  })
  */
  
  const navbg = nav.rect().fill('#14168c').size(300,40).back()
  nav.size(300, 40)
  console.log(elements)
}
