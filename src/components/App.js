
import React, {useState} from "react";
import './../styles/App.css';
import SearchCities from "./SearchCities";
import DisplaySuggestions from "./DisplaySuggestions";

const App = () => {
  const [suggestions, setSuggestions]= useState([]);
  const [formValue,setFormValue]=  useState("");


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search cities of India:</h1>
        <SearchCities suggestions={suggestions} setSuggestions={setSuggestions} formValue={formValue} setFormValue={setFormValue} />
        {suggestions && <DisplaySuggestions  suggestions={suggestions} setFormValue= {setFormValue}/>}
    </div>
  )
}

export default App
