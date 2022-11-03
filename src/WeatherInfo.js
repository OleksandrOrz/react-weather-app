
import FormattedDate from "./FormattedDate"
import Temperature from "./Temperature"

export default function WeatherInfo(props){
    return(<div> <h1>{props.weatherData.city}</h1>
                <ul>
                    <li> <FormattedDate date={props.weatherData.date}/></li>
                    <li className="text-capitalize">{props.weatherData.description}</li>
                </ul>
                    <div className="row  mt-5">
                        <div className="col-6"> 
                        <span className="currentWeatherIMGTemp" > <img src={props.weatherData.iconUrl} alt={props.weatherData.description}></img> </span>
                        <Temperature temp={props.weatherData.temp} /></div>
                        <div className="col-6">
                            <ul>
                                
                                <li>Humidity: {props.weatherData.humidity}%</li>
                                <li>Wind: {Math.round(props.weatherData.wind)} km/h</li>
                            </ul>
                        </div>
                        </div>
            </div> )
}