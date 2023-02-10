import './App.css'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import DailyWeather from './components/DailyWeather/DailyWeather'
import Navbar from './components/Navbar/Navbar'

function App() {

    return <>
        <Navbar />
        <div className='app'>
            <CurrentWeather />
            <DailyWeather />
        </div>
    </>
}

export default App
