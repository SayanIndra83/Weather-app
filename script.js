const weatherapi = "https://api.openweathermap.org/data/2.5/weather?units=metric"
    const apikey = "825825ee8df1d1b58bc193917e83895d"

    async function CheckWeather(city) {
        const response = await fetch(weatherapi +`&q=${city}&appid=${apikey}`)
        if(response.status === 404){
            document.querySelector('.error').style.display = 'block'
            document.querySelector('.weather').style.display = 'none'
        }
        else {
        document.querySelector('.error').style.display = 'none'
        const data = await response.json()
        console.log(data)
        const weather = data.weather[0].main;
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.weather img').src = `images/${weather}.png`
        document.querySelector('.temp').innerHTML = `${parseInt(data.main.temp)}°C`
        document.querySelector('.city').innerHTML = `${data.name}`
        document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`}
    }
        const search = document.querySelector('.searchbox')
        const button = document.querySelector('.btn')
        button.addEventListener('click', (e)=>{
            e.preventDefault();
            const city = search.value;
            const data = CheckWeather(`${city}`);
        })