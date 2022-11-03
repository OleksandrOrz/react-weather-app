import axios from "axios"
import { useState, useEffect } from "react"
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay"

export default function WeatherForecast(props){
    const [ready,setReady]=useState(false)
    const [forecast,setforecast]=useState()
    
    useEffect(()=>{setReady(false)

    },[props.weatherData.cordinates]);

    function response (response){
        setReady(true)
        setforecast(response.data.daily)
    }
   
    if(ready){

    return (<div className="WeatherForecast">
        
    <div className="row">

        {forecast.map(function(dailyForecast, index){ if (index<5){ return(<WeatherForecastDay date={dailyForecast}/>)}else{return null};})}
        
              </div> 
    </div>
    )}else{

    let lon=props.weatherData.cordinates.lon
    let lat=props.weatherData.cordinates.lat
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=b0ce35cd54f47a37e37cfe580baaccdd&units=metric`
    axios.get(apiUrl).then(response)
return null
}



}