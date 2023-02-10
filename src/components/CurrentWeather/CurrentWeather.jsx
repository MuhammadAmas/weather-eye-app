import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import classes from "./CurrentWeather.module.css";
import { city, temprature, day, weather } from "../../Data/CurrentWeatherData";


function CurrentWeather() {


    return <>
        <div className={classes.currWeatherContainer}>


            <div className={classes.weather}>
                <div className={classes.city}>
                    <h1>{city}</h1>
                </div>
                <div className={classes.temprature}>
                    {temprature}°C
                </div>

                <div className={classes.day}>
                    <h2>{day}</h2>
                </div>
                <div className={classes.weather}>
                    <h3>{weather}</h3>
                </div>

            </div>


            <div className={classes.SearchBar}>
                <SearchBar />
            </div>

        </div>

    </>

}

export default CurrentWeather;