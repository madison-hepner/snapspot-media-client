import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createLocationPost, getLocationTypes, getLocationPostById, getLocations } from "./LocationManager"


export const LocationPostForm = () => {
    const history = useHistory()
    const [location_types, setLocation_Types] = useState([])
    const [locations, setLocations] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentLocationPost, setCurrentLocationPost] = useState({
        title: "",
        description: "",
        locationImg: "",
        locationId: 0,
        location_type: 0,
        driver: 0,

    })

    useEffect(() => {
        getLocationTypes()
            .then(setLocation_Types)
    }, [])

    useEffect(() => {
        getLocations()
            .then(setLocations)
    }, [])


    // useEffect(() => {
    //     getLocationTypes()
    //     if (locationId) {
    //         getLocationPostById(parseInt(locationId))
    //             .then(editLocationPost => {
    //                 setCurrentLocationPost({
    //                     location_type: editLocationPost.location_type,
    //                     description: editLocationPost.description,
    //                     title: editLocationPost.title,
    //                     driver: editLocationPost.driver,
    //                     locationId: editLocationPost.locationId.id
    //                 })
    //             })
    //     }
    // }, [])

    const handleInputChange = e => {
        const newLocationPostState = { ...currentLocationPost }
        newLocationPostState[e.target.name] = e.target.value
        if (e.target.name.includes("Id")) newLocationPostState[e.target.name] = parseInt(e.target.value)
        setCurrentLocationPost(newLocationPostState)
    }


    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Make New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentLocationPost.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentLocationPost.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="locationImg">Location Image </label>
                    <input type="text" name="locationImg" required autoFocus className="form-control"
                        value={currentLocationPost.locationImg}
                        onChange={handleInputChange}
                    />
                </div>
                {/* change to be locationId selection from dropdown  */}
                <div className="form-group">
                    <label htmlFor="locationId">Location State: </label>
                    <select name="locationId" required className="form-control"
                        value={currentLocationPost.locationId}
                        onChange={handleInputChange}>
                        <option value="0">Select Location State</option>
                        {
                            locations.map(location => <option key={location.id} value={location.id}>
                                {location.locationName}
                            </option>)
                        }

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="locationTypeId">Location Type:</label>
                    <select name="location_type" required className="form-control"
                        value={currentLocationPost.location_type}
                        onChange={handleInputChange}>
                        <option value="0">Select Location Type</option>
                        {
                            location_types.map(location_type => <option key={location_type.id} value={location_type.id}>
                                {location_type.location_type}
                            </option>)
                        }

                    </select>
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const location_post = {
                        title: currentLocationPost.title,
                        description: currentLocationPost.description,
                        locationImg: currentLocationPost.locationImg,
                        locationId: currentLocationPost.locationId,
                        location_type: parseInt(currentLocationPost.location_type)
                    }

                    // Send POST request to your API
                    // if (locationId) {
                    //     updateLocationPost(locationId, location_post)
                    //         .then(() => history.push("/location_posts"))
                    // } else {

                    createLocationPost(location_post)
                        .then(() => history.push("/location_posts"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}