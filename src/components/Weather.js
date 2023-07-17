
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
        <p>Temperature: {data.temperature}</p>
        <span>{data.conditions}</span>
    </div>
  )
}

export default Weather
