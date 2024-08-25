const nav = SVG().addTo('#nav')
const navgroup = nav.group()
const icongroup = navgroup.group().fill('#14168c')



const drawLayout = () => {
  /*
  SVG(elements.activity).addTo(icongroup).cx(64).click(function() {
    this.animate().stroke({ color: SVG.Color.random('vibrant') })
  })
  elements.airplay.addTo(navgroup)
  icongroup.add(elements.anchor)
  */
  
  /*
  elements.anchor.on('click', (t) => {
    this.stroke({color: '#000'})
  })
  */
  
  const navbg = nav.rect().fill('#191a59').size(jsvg.width, 42).back()
  nav.size(jsvg.width, 42)
  
  const rnd = nav.rounded(20,20).fill('#f0f0f0').addTo(icongroup)
  rnd.clone().addTo(icongroup)
  nav.rect(30,30).fill('#f123f0').addTo(icongroup)
  rnd.clone().addTo(icongroup)
  icongroup.align({direction: 'horizontal', align: 'middle', padding: 6, spacing: 8})
  console.log(elements)
  
  nav.border({side:'bottom', size:0.3,color: '#17e5e8'})
}
