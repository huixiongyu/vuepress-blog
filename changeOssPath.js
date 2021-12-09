const fs = require('fs')

let content = fs.readFileSync('docs/.vuepress/config.js', 'utf8')
console.log(typeof content)
content = content.replace(/base:\s["']{1}[\/A-Za-z0-9_-]*["']{1},/g, '')
console.log(content)
fs.writeFileSync('docs/.vuepress/config.js', content, { flag: 'w' })