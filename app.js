// Initialise storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialise weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Initialise weather object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Changing city and state
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change Location
  weather.changeLocation(city, state);

  // Change Location
  storage.setLocationData(city, state)

  // Get and display weather
  getWeather();

  // JQuery required to save and close Boostrap modal window
  $('#locationModal').modal('hide');
});

// Get and display weather
function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}