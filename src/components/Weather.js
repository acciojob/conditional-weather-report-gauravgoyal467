
import React from "react";

const Weather = ({data}) => {
  let  style={};
  if(data.temperature>20){
    style={
        backgroundColor: 'rgb(255, 0, 0)'
    }
}else{
    style={
        backgroundColor:'rgb(0, 0, 255)'
    }
}

  return (
    <div className="container">
        <span>Temperature: {data.temperature}</span>
        <span>{data.conditions}</span>
    </div>
  )
}

export default Weather
