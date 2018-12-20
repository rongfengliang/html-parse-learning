require('raw-module-require-hook')({
    extensions: ['txt', 'md'],
  });
var content = require("./content.md");
var myMarked = require('marked');
myMarked.setOptions({
  renderer: new myMarked.Renderer(),
  highlight: function(code) {
    return require('highlight.js').highlightAuto(code).value;
  },
  code: true,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

// Compile
console.log(myMarked(content));