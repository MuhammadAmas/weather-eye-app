import './App.css'
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import DailyWeather from './Components/DailyWeather/DailyWeather'
import CommonName from './Components/CommonName/CommonName'
import { temprature, days, weather } from './Data/DailyWeatherData';
import { currCity, currTemprature, currDay, currWeather } from "./Data/CurrentWeatherData";


function App() {

    return <>
        <CommonName />
        <div className='app'>
            <CurrentWeather 
            city={currCity}
            temprature={currTemprature}
            day={currDay}
            weather={currWeather}
            />
            <DailyWeather
                temprature={temprature}
                days={days}
                weather={weather}
            />
        </div>
    </>
}

export default App
