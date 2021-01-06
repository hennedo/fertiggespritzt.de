// Article_engine.js rendert Markdown mit Frontmatter zu HTML und gibt beides zurück
const marked = require ('marked');
const decode = require('unescape');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const matter = require('gray-matter');

md = function (filename) {
  var p = path.join(__dirname, '/artikel/'+filename)
  var include = fs.readFileSync (p, 'utf8');
  var data = matter(include)

  var html = marked (data.content,sanitize= false);
  // unescape marked ejs escape
  html = decode(html);
  html = ejs.render(html);
  return {html,meta:data.data};
};

module.exports = {md};
