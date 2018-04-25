var fs = require('fs');

function Logger(name, city, date) {

    write = function(name, city, date) {
        fs.appendFile('log.txt', `Name: ${name} searched for ${city} at ${date}`)
    }
}

module.exports = Logger