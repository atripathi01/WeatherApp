import React, { useState, useEffect } from 'react'
import Temp from './temp';

function Weather() {
    const[searchValue,setSearchValue]=useState("rewa");
    const[weatherInfo,setWeatherInfo]=useState({});
    const getWeatherData=async()=>{
        try {
                
            let url=`http://api.weatherapi.com/v1/current.json?key=24abb66821394937969173842212308&q=${searchValue}&aqi=yes`;
            const response= await fetch(url);
            const data=await response.json();
            console.log(data);
            console.log(searchValue);
            const {temp_c ,humidity,wind_kph,wind_dir,pressure_in,cloud}=data.current;
            const{icon,text}=data.current.condition;
            const{name,region,localtime,country}=data.location;
            console.log(temp_c , humidity,wind_dir,wind_kph,icon,text,cloud,pressure_in, name , region, localtime,country);

            const allData={
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
                country
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

        <div>
            <div>
                <input 
                placeholder="search" 
                className="search" 
                type="search" 
                autoFocus
                 value={searchValue}
                  onChange={(e)=>{setSearchValue(e.target.value)}}
                  ></input>
                <button type="search" className="searchBtn" onClick={getWeatherData}>Search</button>
            </div>
            <Temp weatherInfo={weatherInfo} />
        </div>
    )
}

export default Weather
