

export default function WeatherForecastDay (props) {
    let iconUrl=`https://openweathermap.org/img/wn/${props.date.weather[0].icon}@2x.png`;

    let  date=new Date (props.date.dt*1000)
    let days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];
let day=days[date.getDay()]
    

    return(
    
    <div className="col"> 
    <div className="WeatherForecastDay">{day}</div> 
    <img className="WeatherForecastIMG" src={iconUrl} alt={props.date.description}></img>
    <div className="WeatherForecastTemp"> 
        <span className="maxTemp">{Math.round(props.date.temp.max)}°</span> 
        <span className="minTemp">{Math.round(props.date.temp.min)}°</span>
    </div>
    </div>) }
    