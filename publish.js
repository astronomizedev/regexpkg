var fs = require('fs')

var package = JSON.parse(fs.readFileSync('./package.json'))

var version = package.version.split('.'), 
major = parseInt(version[0]), 
minor = parseInt(version[1]), 
bug = parseInt(version[2])

if(bug >= 100) {
    bug = 0
    minor += 1
} else {
    bug += 1
}

var final = `${major}.${minor}.${bug}`

package.version = final
fs.writeFileSync('./package.json', JSON.stringify(package, null, 4))
const { exec } = require('child_process');
exec('npm publish', (err, stdout, stderr) => {
  if (err) {
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
