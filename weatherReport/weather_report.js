function showweatherDetails(event) {
    event.preventDefault();

    // const city = document.getElementById('city').value;
    const lat = document.getElementById("latitude").value;
    const lon = document.getElementById("longitude").value;
    const apiKey = 'b938b393feee8708b324fae519b6df79'; // Replace 'YOUR_API_KEY' with your actual API key
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    console.log(apiUrl)
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>
                                <p>Feels like: ${data.main.feels_like} &#8451;`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );