# RegexPKG

![version](https://img.shields.io/npm/v/regexpkg) ![downloads](https://img.shields.io/npm/dt/regexpkg) 
#### RegexPKG is a node module that provides helpful regexes for your package.

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

### List of Regexes(As of v1.0.11)
 - Number

    _Matches a number/multiple numbers._
 - String

    _Matches anything in between quotes._
 - Symbol

    _Matches any symbol_
 - Email

    _Matches an email_
 - Text

    _Matches a line of text_
 - IPV4

    _Matches an IPV4 ip._
 - IPV6

    _Matches an IPV6 ip._
 - PhoneNumber

    _Matches a phone number_

 - Password

    _Matches a password with at least one lowercase letter, at least 1 uppercase letter, at least 1 number, at least 1 symbol, and that is 8 characters long._