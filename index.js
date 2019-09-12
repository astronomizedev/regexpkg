const fs = require('fs'), regexes = require('./regexes.js')

/**
 * Returns all the regexes in the library.
 */
function getAllRegexes() {
    var keys = Object.keys(regexes)
    return keys
}

/**
 * Tests a regex from the library to a string.
 * @param {String} regexName 
 * @param {String} string 
 */
function test(regexName, string) {
    return regexes[regexName].test(string)
}

module.exports = {
    Regex: regexes,
    getAllRegexes: getAllRegexes,
    test: test
}