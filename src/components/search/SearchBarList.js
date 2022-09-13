import { React, useState } from 'react'
import { getLocations } from './SearchManager'



export const SearchBarList = (props) => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        getLocations()
            .then(setLocations)
    }, [])

    return (
        <ul>
            {locations.map((location) => (
                <li key={location.id}>{location.locationName}</li>
            ))}
        </ul>
    )
}