var weather = require('weather-js');
var moment = require('moment')
var fs      = require('fs');

function UserSearch(name, city) {
    this.name = name;
    this.city = city;
    this.date = moment(Date.now()).format();
    this.getWeather = function () {
        fs.appendFileSync('./log.txt', `Name: ${name} searched for ${city} at ${this.date}`)
        fs.appendFileSync('./log.txt', '\n')
        weather.find({search: this.city, degreeType: 'F'}, function(err, result) {
            if(err) throw err
            console.log(result)
      });
    }
}

// var testUserSearch = new UserSearch('Billy', 'Chicago, Illinois');

// console.log(testUserSearch.name)
// console.log(testUserSearch.city)
// console.log(testUserSearch.getWeather())

module.exports = UserSearch