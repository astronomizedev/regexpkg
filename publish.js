var fs = require('fs')

var package = JSON.parse(fs.readFileSync('./package.json'))

var version = package.version.split('.'), 
major = parseInt(version[0]), 
minor = parseInt(version[1]), 
bug = parseInt(version[2])

if(minor >= 100) {
    major++;
    minor = 0
    bug = 0
} else if(bug >= 100) {
    bug = 0
    minor++
} else {
    bug++
}

var final = `${major}.${minor}.${bug}`

package.version = final
fs.writeFileSync('./package.json', JSON.stringify(package, null, 4))
const { exec } = require('child_process');
exec('npm publish');
console.log(`+${final}`)
