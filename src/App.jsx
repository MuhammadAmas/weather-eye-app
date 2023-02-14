import './App.css'
import Header from './Components/Header/Header'
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import DailyWeather from './Components/DailyWeather/DailyWeather'
import weather from './Data/CurrentWeatherData';
import dailyWeather from './Data/DailyWeatherData';

function App() {

    return <>
        <Header />
        <div className='app'>
            <CurrentWeather
                city={weather.city}
                temprature={weather.temprature}
                day={weather.day}
                weatherCondition={weather.weatherCondition}
            />
            <DailyWeather
                temprature={dailyWeather.temprature}
                day={dailyWeather.day}
                weather={dailyWeather.weatherCondition}
            />
        </div>
    </>
}

export default App
