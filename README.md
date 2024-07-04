# jsvg

Create SVG app layouts in minutes, only using JS.

Copy element properties (color codes, sizes…etc.) form your prototyping tool (figma, adobe XD…etc.) and paste into JS object.

App layout is ready and fully SVG.


## Benefits

* Eliminates HTML and CSS coding 🎉
* Pixel Perfect, Design-View match
* Utilizing high quality vector elements


## Project Target

Vector graphics component creation using JS objects, for both mobile and web apps.


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