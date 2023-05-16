import './style.css'

const weatherHandler = (() => {

    let weatherObject = {}

    function getWeather () {return weatherObject}

    async function setWeather(string){
        try {
        let url = `https://api.weatherapi.com/v1/current.json?key=7a0c192880364739aaf80554231205&q=${string}`
        let response = await fetch(url, { mode: "cors" })
            let data = await response.json() 
        let processdata = {
            location: data.location.name,
            country: data.location.country,
            conditionText: data.current.condition.text,
            conditionUrl: data.current.condition.icon,
            humidity: data.current.humidity,
            tempC: data.current.temp_c,
            tempF: data.current.temp_f,
            uv: data.current.uv,
            windDir: data.current.wind_dir
        }
           weatherObject = processdata
            console.log(weatherObject)
            domHandler.constructDom(weatherObject)
        }
        catch(error) {
         console.log(error)
        }
    }

    return {
        getWeather,
        setWeather
    }

})()


const domHandler = (() => {

    async function constructDom(object){
        let locationEl = document.getElementsByClassName('card-location')[0]
        locationEl.textContent = object.location

        let countryEl = document.getElementsByClassName('card-country')[0]
        countryEl.textContent = object.country

        const today = new Date();

        // Get the date components
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Months are zero-based, so adding 1
        const day = today.getDate();
        const hours = today.getHours();
        const minutes = today.getMinutes();

        // Create a formatted string
        const formattedDate = `${day}-${month}-${year}`
        const formattedTime = `${hours}:${minutes}`

        let dateEl = document.getElementsByClassName('card-date')[0]
        dateEl.textContent = formattedDate

        let timeEl = document.getElementsByClassName('card-time')[0]
        timeEl.textContent = formattedTime

        let tempEl = document.getElementsByClassName('temp')[0]
        tempEl.textContent = object.tempC + "°"

        let conditionEl = document.getElementsByClassName('condition')[0]
        conditionEl.textContent = object.conditionText

        let windEl = document.getElementsByClassName('wind')[0]
        windEl.textContent = object.windDir

        let conditionImg = document.getElementsByClassName('img')[0]
        conditionImg.src = "http:" + object.conditionUrl
    }
return{
    constructDom
}

})()

weatherHandler.setWeather('stockholm');