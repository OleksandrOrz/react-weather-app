import { useState } from "react"


export default function Temperature(props){
    const[unit,setUnit]=useState("cel")
    
    function showFahr(event){
event.preventDefault()
setUnit("fahr")
    }
    function showCel(event){
        event.preventDefault()
setUnit("cel")
    }
    if (unit==="cel"){
    
    return(
   <span>
    <span className="temperature"> {Math.round(props.temp)}</span> 
    <span className="units">°C| <a href="#" onClick={showFahr}>°F</a> </span>
    </span>
    )}
    else{
        let fahr=Math.round(props.temp *1.8+32)
        return(
                     <span>
    <span className="temperature"> {fahr}</span> 
    <span className="units"><a href="#" onClick={showCel}>°C</a>| °F </span>
    </span>
    )



    }


}