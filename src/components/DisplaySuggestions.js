import React from "react";

const DisplaySuggestions =({suggestions, setFormValue})=>{

    function citySelected(e){
        setFormValue(e.target.innerText.trim())
    }
    return(
        <div className="cityList">
            {
                suggestions.map((city,index)=>(
                    <span className="cityP" key={index} onClick={citySelected}>{city}</span>
                ))
            }

        </div>
    )
}

export default DisplaySuggestions