
import React from "react";
import './../styles/App.css';
import Weather from "./Weather";

const weatherData={temperature: 25, conditions: "Sunny"}
const App = () => {
  return (
    <div>
       <Weather data={weatherData}/>
    </div>
  )
}

export default App
