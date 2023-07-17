
import React from "react";

const Weather = ({data}) => {
  let  style={};
  if(data.temperature>20){
      style={
          backgroundColor:"red"
      }
  }else{
      style={
          backgroundColor:"blue"
      }
  }

  return (
    <div className="container">
        <h1>{data.temperature}&deg;C</h1>
        <p>{data.conditions}</p>
    </div>
  )
}

export default Weather
