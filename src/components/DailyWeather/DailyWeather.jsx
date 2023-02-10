import React from 'react';
import classes from './DailyWeather.module.css';
import { temprature, days, weather } from '../../Data/DailyWeatherData';

function DailyWeather() {
    console.log(temprature);
    return <>
        <div className={classes.dailyWeather}>
            <div className={classes.dayweather}>
                {days.map((day, index) => (
                    <div className={classes.perdayweather} key={index}>
                        <h2 className={classes.day}>{day}</h2>
                        <h2 className={classes.temprature}>{temprature[index]}°C</h2>
                        <h2 className={classes.weather}>{weather[index]}</h2>
                    </div>
                ))}
            </div>
        </div>
    </>



}

export default DailyWeather;