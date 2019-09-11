# RegexPKG

![version](https://img.shields.io/npm/v/regexpkg) ![downloads](https://img.shields.io/npm/dt/regexpkg) 
#### RegexPKG is a node package that provides helpful regexes for your package.

### Using RegexPKG
To get started, download RegexPKG.
```
npm install regexpkg
```

Next, you can start using the API.
```javascript
const regexpkg = require('regexpkg')

console.log(regexpkg.getAllRegexes()) // logs all the regexes in the library

console.log(regexpkg.test('String', '"Hello, World!"')) // returns true or false wether the regex matching the name matches the string.

console.log(regexpkg.Regex[<name>]) // Get a regex by name

console.log(regexpkg.Regex.<name>)  // Get a regex by name
```

### List of Regexes(As of v1.0.4)
 - Number
 - String
 - Symbol
 - Email
 - Text
 - IPV4
 - IPV6
 - PhoneNumber