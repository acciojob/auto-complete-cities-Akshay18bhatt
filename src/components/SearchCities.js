import React, {useState, useEffect} from "react";
import CitiesData from "./CitiesData";


const SearchCities= ({suggestions,setSuggestions,formValue,setFormValue})=>{

    const [search, setSearch]= useState("");
    

    useEffect(()=>{
        filterCities();
    },[search])

    function filterCities(){

        let filteredCities= CitiesData.filter((city)=>{
             if(city.toLowerCase().includes(search.toLowerCase())){
                return city
            }
        });
        // console.log(filteredCities);
        setSuggestions(filteredCities);

    }
    return(
        <form>
            <input type="text" placeholder="Enter City Name" onChange={(e)=> {setSearch(e.target.value)
            setFormValue(e.target.value)}}
                value={formValue}
            >

            </input>
        </form>
    )
}

export default SearchCities