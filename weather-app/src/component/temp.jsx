import React from 'react'

const Temp=(weatherInfo)=> {

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
    }=weatherInfo;

    return (
        <div>
            <div><i className="wi wi-day-rain"></i></div>
            <div>
                <div>
                    <span>{temp_c}&deg;</span>
                    <span>sunny</span></div>
                console.log({temp_c})
                <div>new delhi indan</div>
            </div>
            <div>{new Date().toLocaleDateString()}</div>
            <div>
                <div>
                    <p> <i className={"wi wi-sunset"}></i></p>
                    <div>
                        <p>19:19<br />sunset</p>
                    </div>
                   
                </div>
                <div>
                    <p> <i className={"wi wi-sunset"}></i></p>
                    <div>
                        <p>19:19<br />sunset</p>
                    </div>
                   
                </div>
                <div>
                    <p> <i className={"wi wi-rain"}></i></p>
                    <div>
                        <p>19:19<br />rain</p>
                    </div>
                   
                </div>
                <div>
                    <p> <i className={"wi wi-humidity"}></i></p>
                    <div>
                        <p>19:19<br />humidity</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Temp
