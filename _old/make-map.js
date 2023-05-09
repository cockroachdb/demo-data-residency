const fs = require('fs')

// So you do this first step only once, when developing your app
const getMapJSON = require('dotted-map').getMapJSON

// This function accepts the same arguments as DottedMap in the example above.
const mapJsonString = getMapJSON({ height: 63, grid: 'diagonal' })
// console.log(mapJsonString)

fs.writeFileSync('./map.txt', mapJsonString)

// const DottedMap = require('dotted-map').default
// // Or in the browser: import DottedMap from 'dotted-map';

// const map = new DottedMap({ height: 60, grid: 'diagonal' })

// map.addPin({
//   lat: 40.73061,
//   lng: -73.935242,
//   svgOptions: { color: '#d6ff79', radius: 0.4 }
// })
// map.addPin({
//   lat: 48.8534,
//   lng: 2.3488,
//   svgOptions: { color: '#fffcf2', radius: 0.4 }
// })

// const svgMap = map.getSVG({
//   radius: 0.22,
//   color: '#423B38',
//   shape: 'circle',
//   backgroundColor: '#020300'
// })

// fs.writeFileSync('./map.svg', svgMap)
