


export default function Temperature(props){
    
    
    return(
   <span>
    <span className="temperature"> {Math.round(props.temp)}</span> 
    <span className="units">°C</span>
    </span>
    )


}