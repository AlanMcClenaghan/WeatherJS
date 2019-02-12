// Initialisr weather object
const weather = new Weather('London', 'UK');

// Initialisr weather object
const ui = new UI();

// Changing city and state
// weather.changeLocation('New York', 'NY')

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
