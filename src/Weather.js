import axios from "axios";
import { useState } from "react";
import "./Weather.css"
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(){
   const [redy,setReady]=useState(false)
   const [city,setCity]=useState("Kiev")
   const [weatherData, setWeatherData]=useState({})
    function hendleRespons(response){
        setReady(true)
           setWeatherData({
            temp: response.data.main.temp,
            city:response.data.name,
            wind: response.data.wind.speed,
            description:response.data.weather[0].description,
            humidity: response.data.main.humidity,
            iconUrl:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            date:new Date (response.data.dt*1000),
            cordinates: response.data.coord
        })
    }

    function citySearch(){
        const apiKey = "b0ce35cd54f47a37e37cfe580baaccdd";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(hendleRespons)
    }
    function enterCity(event){
     event.preventDefault();
    citySearch()
    }
    function cityChange(event){
        setCity(event.target.value)

    }
    if(redy){
        return(
<div className="Weather">
    <div className="container">
        <form onSubmit={enterCity}><div className="row">
            <div className="col-9"> <input type="search"className="form-control" onChange={cityChange} placeholder="Enter a city" autoFocus="on"></input> </div>
            <div className="col-3"> <input type="submit"className="btn btn-primary " value="Search" ></input> </div>
        </div></form>
       <WeatherInfo weatherData={weatherData}/>
   <WeatherForecast weatherData={weatherData}/>
    </div>
</div>)} else {
citySearch()
return("Loading....")
}}
