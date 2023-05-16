import './style.css'

const weatherHandler = (() => {

    let weatherObject = {}

    function getWeather () {return weatherObject}

    async function setWeather(string){
        try {
        let url = `https://api.weatherapi.com/v1/current.json?key=7a0c192880364739aaf80554231205&q=${string}`
        let response = await fetch(url, { mode: "cors" })
            let data = await response.json() 
            console.log(data)
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


weatherHandler.setWeather('stockholm')