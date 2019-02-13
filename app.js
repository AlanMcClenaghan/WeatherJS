// Initialise weather object
const weather = new Weather('London', 'UK');

// Initialise weather object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Changing city and state
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

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
