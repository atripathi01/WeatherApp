import React, { useState } from 'react'
import './App.css'
import Weather from './component/weather'
import 'weather-icons/css/weather-icons.css'
// api=http://api.weatherapi.com/v1/current.json?key=24abb66821394937969173842212308&q=india&aqi=yes
function App() {

  return (
    <>
      
      <Weather />
    </>
  )
}

export default App
