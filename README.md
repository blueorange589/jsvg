# jsvg

Create SVG app layouts in minutes, only using JS.

Copy element properties (color codes, sizes…etc.) form your prototyping tool (figma, adobe XD…etc.) and paste into JS object.

App layout is ready and fully SVG.


## Benefits

* Eliminates HTML and CSS coding 🎉
* Pixel Perfect, Design-View match
* Utilizing high quality vector elements
* Auto-scaling elements for device size (auto-responsive)


## Project Target

Vector graphics component creation using JS objects, for both mobile and web apps. with possibility to merge 2 in future 😁


```javascript
const button = jsvg.create.element('button', {
        fill: 'black',
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
        contains: [icon, text],
        events: {
          click: events.addToCart
        }
      })
```


Demo \[WIP\]: <https://blueorange589.github.io/jsvg/>


Happy y’all freedom lovers! 🎉


**Credits**

Opentype.js \[<https://opentype.js.org/>\]

SVG.js \[<https://svgjs.dev/docs/3.2/>\]


idea and develooment by kermit the frog, with love 😂


public. no license.

for personal limitations, you may check https://github.com/blueorange589/artwork/blob/main/personal-law.md

