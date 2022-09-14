import { React, useState, useEffect, useRef } from "react";
import "./SearchBar.css"
import { SearchBarList } from "./SearchBarList";
import { getLocations, searchLocations } from "./SearchManager";



export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [locations, setLocations] = useState([])
    const [filteredLocations, setFilteredLocations] = useState([])
    const [ reset, setReset ] = useState(false)
    
    useEffect(() => {
        getLocations().then((data) => {
            setLocations(data)
            setFilteredLocations(data)
        })
    }, [])
    
    const handleInput = (e) => {
        e.preventDefault()


        setSearchInput(e.target.value)

    }


    const handleChange = (e) => {

      console.log(searchInput)

    if (searchInput.length > 0) {
        const x = locations.filter((location) => {
            console.log(searchInput)
            if (location.locationName === searchInput) {
                return true
            }
            return false


    });
        setFilteredLocations(x)
    }}

    useEffect(() => {
        getLocations(setLocations);
      }, []);


    return (
        <div>
              <input
                    type="text"
                    id="search"
                    placeholder="Search Location"
                    autoComplete="off"
                    onChange={handleInput}>
                    </input>
                <button 
                        type="button"
                        onClick={() => {handleChange()}}>
                                Search
                    </button>

            <div className="searchbarlist__card" key={location.id}>
                <ul className="searchbarlist__listitem">
                    {filteredLocations.map((location) => (
                        <li key={location.id}>{location.locationName}</li>
                    ))}
                </ul>
                </div>
        </div>
    );
  }
  
