var userSearch   = require ('./userSearch.js');
var weatherAdmin = require ('./WeatherAdmin.js');

var name;
var cmd;
var location;

function usage() {
    console.log('Usage: node cli.js <username> <command> [city]')
    console.log('  where    username == Your user name')
    console.log('           command == search or admin')
}


if (process.argv.length < 4) {
    usage();
    process.exit();
} else {
    name     = process.argv[2];
    cmd      = process.argv[3];
    location = process.argv.slice(4).join();

    if (cmd == 'search') {
        var search = new userSearch(name, location)
        search.getWeather()

    } else if (cmd == 'admin') {
        var admin = new weatherAdmin(name,location)
        admin.getData();
        
    } else {
        usage();
        process.exit();
    }
}




