const moment = require('moment');

console.log(moment().format());

var now  = moment();
console.log('current timestamp', now.unix());

var timestamp = 1500895676;
var currentMoment = moment.unix(timestamp);
console.log('current monent', currentMoment.format('MMM D, YY @ h:mm a'));


console.log('current monent', currentMoment.format('MMMM Do, YYYY @ k:mm '));
console.log('current time', moment().format('MMMM Do, YYYY @ k:mm '));
