import axios from "axios";
import { useState } from "react";
import "./Weather.css"

export default function Weather(){
   const [redy,setReady]=useState(false)
   const [weatherData, setWeatherData]=useState({})
    function hendleResponae(response){
        setReady(true)
        console.log(response)
        setWeatherData({
            temp: response.data.main.temp,
            city:response.data.name,
            wind: response.data.wind.speed,
            description:response.data.weather[0].description,
            humidity: response.data.main.humidity,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/rain.png"
        })
    }
    
    if(redy){
        return(
<div className="Weather">
    <div className="container">
        <form><div className="row">
            <div className="col-9"> <input type="search"className="form-control" placeholder="Enter a city" autoFocus="on"></input> </div>
            <div className="col-3"> <input type="submit"className="btn btn-primary " value="Search"></input> </div>
        </div></form>
       
   <h1>{weatherData.city}</h1>
    <ul>
        <li> {weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
    </ul>
        <div className="row  mt-5">
            <div className="col-6"> <span className="currentWeatherIMGTemp" alt={weatherData.description}> <img src={weatherData.iconUrl}></img> <span className="temperature"> {Math.round(weatherData.temp)}</span> <span className="units">C° </span></span></div>
            <div className="col-6">
                <ul>
                    
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                </ul>
            </div>
            </div> 
    </div>
</div>)} else {
const apiKey = "b0ce35cd54f47a37e37cfe580baaccdd";
let city="London";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(hendleResponae)
return("Loading....")
}}
