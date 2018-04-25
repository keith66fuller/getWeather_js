var fs = require('fs');
var UserSearch = require('./userSearch.js')


function WeatherAdmin (name, location) {
    this.newUserSearch = function(name, location) {
        this.us = new UserSearch(name, location)

        //save to log
        console.log(this.us)
    }

    this.getData = function(name) {
        var data = fs.readFileSync('./log.txt', 'utf8')
        console.log('Here is your data')
           console.log(data)
    }
}

module.exports = WeatherAdmin;

// var admin = new WeatherAdmin();
// admin.newUserSearch('Bill', 'Chicago')
// admin.getData();