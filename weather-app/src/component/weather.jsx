import React, { useState, useEffect } from 'react'
import Temp from './temp';
import './style.css'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


function Weather() {
    const [searchValue, setSearchValue] = useState("Mumbai");
    const [weatherInfo, setWeatherInfo] = useState({});
    const getWeatherData = async () => {
        try {

            let url = `https://api.weatherapi.com/v1/current.json?key=24abb66821394937969173842212308&q=${searchValue}&aqi=yes`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            console.log(searchValue);
            const { temp_c, humidity, feelslike_c, wind_kph, wind_dir, pressure_in, cloud } = data.current;
            const { icon, text } = data.current.condition;
            const { name, region, localtime_epoch, localtime, country } = data.location;
            console.log(temp_c, humidity, wind_dir, wind_kph, icon, text, cloud, pressure_in, name, region, localtime, country);

            const allData = {
                temp_c,
                humidity,
                wind_kph,
                wind_dir,
                pressure_in,
                cloud,
                icon,
                text,
                name,
                region,
                localtime,
                country,
                feelslike_c,
                localtime_epoch
            };
            setWeatherInfo(allData);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherData();
    }, [])

    return (
        <>

            <div className="searchSection">
                <div className="inputBox">
                    <input
                        placeholder="City Name"
                        className="search"
                        type="search"
                        autoFocus
                        value={searchValue}
                        onChange={(e) => { setSearchValue(e.target.value) }}
                    ></input>
                    <button
                        

                        type="search" 
                        className="searchBtn" 
                        onClick={getWeatherData}>
                            Search
                            </button>
                </div>
            </div>
            <Temp weatherInfo={weatherInfo} />
            <footer className="foo">
                <div>ayushtripathi@2021</div>
               <div>Weather App</div>
            </footer>
        </>
    )
}

export default Weather
