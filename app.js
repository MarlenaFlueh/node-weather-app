/*
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
  .options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});

// 673f1e94bcd88ff299541cd365fa2881
// https://api.darksky.net/forecast/673f1e94bcd88ff299541cd365fa2881/53.2536096,%2010.3885867
*/

// Start here

const request = require('request');

request({
  url: `https://api.darksky.net/forecast/673f1e94bcd88ff299541cd365fa2881/53.2536096,%2010.3885867`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect server.');
  } else if (response.statusCode === 400) {
    console.log('Unable to fetch weather.');
  } else if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  }
});
