import React from 'react'
import './style.css'
const Temp = ({ weatherInfo }) => {

    const {
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
    } = weatherInfo;
    console.log(weatherInfo);

    return (
        <div className="weatherPage">
            <section className="weatherBox">    
                <div className="iconBox">
                    <div className="weatherLogo">

                        <img src={icon} alt="weatherIcon" className="weatherIcon" />
                    </div>
                </div>


                <div className="weatherDetail">
                    <div>
                        <div className="currentTemp">
                            <span className="cityTemp">{temp_c}&deg;</span>
                        </div>
                        <div className="cityName">
                            <p>{name}, {region}<br /> {country}</p>
                        <p>Temp. Feelslike: {feelslike_c}</p>
                        </div>
                    </div>
                    <div>
                        <p className="dateAndTime">Date & Time: {localtime}</p>
                    </div>
                </div>
                </section>
                <div className="extraDetail">
                    <div className="extraDetailBox">
                        <p> <i className={"wi wi-sunset"}></i></p>
                        <div className="da">
                            <p>{new Date(`{localtime_epoch}*1000`).toLocaleTimeString('en-IN')}<br />sunset</p>
                        </div>

                    </div>
                    <div className="extraDetailBox">
                        <p> <i className={"wi wi-humidity"}></i></p>
                        <div className="da">
                            <p>{humidity}<br />humidity</p>
                        </div>

                    </div>
                    <div className="extraDetailBox">
                        <p> <i className={"wi wi-rain"}></i></p>
                        <div className="da">
                            <p>{pressure_in}<br />pressure</p>
                        </div>

                    </div>
                    <div className="extraDetailBox">
                        <p> <i className={"wi wi-strong-wind"}></i></p>
                        <div className="da">
                            <p>{wind_kph}&{wind_dir}<br />wind</p>
                        </div>

                    </div>
                </div>

           
        </div>
    )
}

export default Temp
