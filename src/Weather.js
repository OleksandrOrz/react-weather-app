import "./Weather.css"

export default function Weather(){
    return(
<div className="Weather">
    <div className="container">
        <form><div className="row">
            <div className="col-9"> <input type="search" placeholder="Enter a city"></input> </div>
            <div className="col-3"> <input type="submit"className="btn btn-primary"></input> </div>
        </div></form>
    </div>    
   <h1>Kyiv</h1>
    <ul>
        <li >Monday 15:37</li>
        <li>Partly Cloudly</li>
    </ul>
    <div className="container">
        <div className="row">
            <div className="col-6"> <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"></img> 14C°</div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 5%</li>
                    <li>Humidity: 75%</li>
                    <li>Wind: 10 km/h</li>
                </ul>
            </div>
        </div>
    </div>
</div>)}
