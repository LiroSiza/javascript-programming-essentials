function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'd6ddd3631bcb46cb6a686124af6e59f2'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

function showweatherDetailsLatLon(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = 'd6ddd3631bcb46cb6a686124af6e59f2'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    const weatherInfo2 = document.getElementById('weatherInfo2');
        weatherInfo2.innerHTML = `<h2>Weather in lon: ${data.coord.lon} and lat: ${data.coord.lat}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo2 = document.getElementById('weatherInfo2');
        weatherInfo2.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
document.getElementById('weatherForm2').addEventListener('submit',showweatherDetailsLatLon );