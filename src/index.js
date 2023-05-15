import './style.css'

const weatherHandler = (() => {

    let weatherObject = {}

    function getWeather () {return weatherObject}

    async function setWeather(string){
        try {
        let url = `https://api.weatherapi.com/v1/current.json?key=7a0c192880364739aaf80554231205&q=${string}`
        let response = await fetch(url, { mode: "cors" })
        let data = await response.json()
        let useableObject = await dataHandler.splitData(data)
    
        }
        catch {
            console.log('no data response from server')
        }
    }

    return {
        getWeather,
        setWeather
    }

})()



const dataHandler = (() => {
    
    
    async function splitData (object) {
        let tempC = object.current.temp_c
        let tempF = object.current.temp_f
        let conditionString = object.condition.text
        
        console.log(object)
        console.log('printTestcalled')
    }
    

    return {
        splitData
    }

  })();

weatherHandler.setWeather('stockholm')