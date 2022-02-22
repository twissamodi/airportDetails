const airportData = require('../data/airports.json');

exports.getDetails = (airportCode) => {
  if (typeof (airportCode) !== 'string') { throw new Error('You must enter a string'); }
  for (let index = 0; index < airportData.length; index += 1) {
    const currentAirport = airportData[index];
    if (currentAirport.code.toLowerCase() === airportCode.toLowerCase()) {
      return `${currentAirport.name}, ${currentAirport.city}, ${currentAirport.country}`;
    }
  }
  throw new Error('There is no such airport code in the data.');
};
