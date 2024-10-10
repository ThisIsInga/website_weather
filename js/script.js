const apiKey = 'ВАШ API KEYS';
const city = 'Хабаровск';

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather').innerHTML = `Температура: ${data.main.temp}°C, ${data.weather[0].description}`;
        } else {
            document.getElementById('weather').innerHTML = 'Ошибка получения погоды: ' + data.message;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = 'Ошибка получения погоды: ' + error.message;
    }
}

function updateTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    document.getElementById('time').innerHTML = now.toLocaleTimeString([], options);
}

// Обновляем время каждую секунду
setInterval(updateTime, 1000);

// Получаем погоду
getWeather();
