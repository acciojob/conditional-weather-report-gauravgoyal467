
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
        <div>Temperature: {data.temperature}</div>
        <div>{data.conditions}</div>
    </div>
  )
}

export default Weather
