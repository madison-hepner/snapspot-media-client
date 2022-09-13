import { React, useState, useEffect } from "react";
import "./SearchBar.css"
import { SearchBarList } from "./SearchBarList";
import { getLocations } from "./SearchManager";




export const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [locations, setLocations] = useState([])


    useEffect(() => {
        getLocations().then(data => setLocations(data))
    }, [])
    

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    if (searchInput.length > 0) {
        locations.filter((location) => {
        return location.locationName.match(searchInput);
    });
    }


    return (
        <div>
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} 
            />
            <div className="searchbarlist__card" key={location.id}>
                <ul className="searchbarlist__listitem">
                    {locations.map((location) => (
                        <li key={location.id}>{location.locationName}</li>
                    ))}
                </ul>
                </div>
        </div>
    );
  }
  
