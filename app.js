// Initialisr weather object
const weather = new Weather('London', 'UK');

// Changing city and state
// weather.changeLocation('New York', 'NY')

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}
