var css = require("css")
var obj = css.parse(`body {font-size:30px}`,{ source: 'http://you-server.com/app.css' })
var result=css.stringify(obj,{sourcemap:true})
console.log(result.code)
console.log(JSON.stringify(obj))