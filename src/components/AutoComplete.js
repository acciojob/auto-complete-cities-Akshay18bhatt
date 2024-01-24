import React from "react";

const AutoComplete =({suggestions, setFormValue})=>{

    function citySelected(e){
        setFormValue(e.target.innerText.trim())
    }
    return(
        <ul className="cityList">
            {
                suggestions.map((city,index)=>(
                    <li className="cityLi" key={index} onClick={citySelected}>{city}</li>
                ))
            }

        </ul>
    )
}

export default AutoComplete