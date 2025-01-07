const apiKey = '83f898d07d69b4dbe9a8f83a4188d7e8';

// Function to fetch weather data for a given city
function fetchWeather(city) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(weatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('temp').innerText = `${data.main.temp}°C`;
            document.getElementById('humidity').innerText = `${data.main.humidity}%`;
            document.getElementById('weather').innerText = data.weather[0].description;
            document.getElementById('wind').innerText = `${data.wind.speed} m/s`;
            document.getElementById('visibility').innerText = `${(data.visibility / 1000).toFixed(1)} km`; // Visibility in km
        })
        .catch(err => {
            console.error('Error fetching weather data:', err);
            alert('Could not fetch weather data. Please try again.');
        });
}

// Event listener for city selection
document.getElementById('citySelector').addEventListener('change', function () {
    const selectedCity = this.value;
    if (selectedCity) {
        fetchWeather(selectedCity);
    }
});



// // Fetch weather for the default city on page load
// document.addEventListener('DOMContentLoaded', () => {
//     fetchWeather('Dehradun'); // Default city
// });

