const airport = require('./airportDetailsRetriever');

console.log(airport.getDetails('DEL'));
try {
  airport.getDetails('TWI');
} catch (err) {
  console.log(err.message);
}
