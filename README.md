# RegexPKG
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

console.log(test('String', '"Hello, World!"')) // returns true or false wether the regex matching the name matches the string.
```