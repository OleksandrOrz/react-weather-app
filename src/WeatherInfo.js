
import FormattedDate from "./FormattedDate"

export default function WeatherInfo(props){
    return(<div> <h1>{props.weatherData.city}</h1>
                <ul>
                    <li> <FormattedDate date={props.weatherData.date}/></li>
                    <li className="text-capitalize">{props.description}</li>
                </ul>
                    <div className="row  mt-5">
                        <div className="col-6"> <span className="currentWeatherIMGTemp" alt={props.weatherData.description}> <img src={props.weatherData.iconUrl}></img> <span className="temperature"> {Math.round(props.weatherData.temp)}</span> <span className="units">C° </span></span></div>
                        <div className="col-6">
                            <ul>
                                
                                <li>Humidity: {props.weatherData.humidity}%</li>
                                <li>Wind: {Math.round(props.weatherData.wind)} km/h</li>
                            </ul>
                        </div>
                        </div>
            </div> )
}