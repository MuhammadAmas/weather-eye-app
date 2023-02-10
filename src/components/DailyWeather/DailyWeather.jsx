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
                        <h2>{day}</h2>
                        <h2>{temprature[index]}</h2>
                        <h2>{weather[index]}</h2>
                    </div>
                ))}
            </div>
        </div>
    </>



}

export default DailyWeather;