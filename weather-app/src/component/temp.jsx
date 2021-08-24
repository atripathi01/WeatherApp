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
        country
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
                        <div>
                            <span>{temp_c}&deg;</span>
                            <span>sunny</span>
                        </div>
                        <div>
                            {name}{country}
                        </div>
                    </div>
                    <div>
                        {localtime}
                    </div>
                </div>
                </section>
                <div className="extraDetail">
                    <div className="extraDetailBox">
                        <p> <i className={"wi wi-sunset"}></i></p>
                        <div>
                            <p><br />sunset</p>
                        </div>

                    </div>
                    <div className="extraDetailBox">
                        <p> <i className={"wi wi-humidity"}></i></p>
                        <div>
                            <p>{humidity}<br />humidity</p>
                        </div>

                    </div>
                    <div className="extraDetailBox">
                        <p> <i className={"wi wi-rain"}></i></p>
                        <div>
                            <p>{pressure_in}<br />pressure</p>
                        </div>

                    </div>
                    <div className="extraDetailBox">
                        <p> <i className={"wi wi-strong-wind"}></i></p>
                        <div>
                            <p>{wind_kph}&{wind_dir}<br />wind</p>
                        </div>

                    </div>
                </div>

           
        </div>
    )
}

export default Temp
