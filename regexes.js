var regexes = {
    /**
     * Number
     * Example: 1234567890
     */
    Number: /[0-9]/,
    
    /**
     * String
     * Example: "Hello, World!"
     */
    String: /".*"/,

    /**
     * Symbol
     * Example: !
     */
    Symbol: /[!-\/:-@[-`{-~]/,

    /**
     * Email
     * Example: email@example.com
     */
    Email: /\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,

    /**
     * Text
     * Example: Hello, World!
     */
    Text: /[a-zA-Z]*[0-9]*[ ]*/s
}

module.exports = regexes
regexes.Text