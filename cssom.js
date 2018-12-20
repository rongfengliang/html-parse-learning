var cssom = require("cssom")
var parse = cssom.parse(`body {font-size:30px}`)
console.log(parse)
