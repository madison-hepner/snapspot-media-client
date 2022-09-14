import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createLocationPost, getLocationTypes, getLocationPostById, getLocations, updateLocationPost } from "./LocationManager"


export const LocationEditForm = () => {
    const history = useHistory()
    const [location_types, setLocation_Types] = useState([])
    const [locations, setLocations] = useState([])


    useEffect(() => {
        getLocationTypes()
            .then(setLocation_Types)
    }, [])

    useEffect(() => {
        getLocations()
            .then(setLocations)
    }, [])



    useEffect(() => {
        getLocationTypes()
        if (locationPostId) {
            getLocationPostById(parseInt(locationPostId))
                .then(editLocationPost => {
                    setCurrentLocationPost({
                        location_type: updateLocationPost.location_type,
                        description: updateLocationPost.description,
                        title: updateLocationPost.title,
                        driver: updateLocationPost.driver,
                        locationId: updateLocationPost.locationId.id
                    })
                })
        }
    }, [])


    const updateExistingPost = evt => {
        evt.preventDefault()
        setIsLoading(true);

    }

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
                        value={updateLocationPost.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={updateLocationPost.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="locationImg">Location Image </label>
                    <input type="text" name="locationImg" required autoFocus className="form-control"
                        value={updateLocationPost.locationImg}
                        onChange={handleInputChange}
                    />
                </div>
                {/* change to be locationId selection from dropdown  */}
                <div className="form-group">
                    <label htmlFor="locationId">Location State: </label>
                    <select name="locationId" required className="form-control"
                        value={updateLocationPost.locationId}
                        onChange={handleInputChange}>
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
                        value={updateLocationPost.location_type}
                        onChange={handleInputChange}>
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
                        title: updateLocationPost.title,
                        description: updateLocationPost.description,
                        locationImg: updateLocationPost.locationImg,
                        locationId: parseInt(updateLocationPost.locationId),
                        location_type: parseInt(updateLocationPost.location_type)
                    }

                    // Send POST request to your API
                    // if (locationId) {
                    //     updateLocationPost(locationId, location_post)
                    //         .then(() => history.push("/location_posts"))
                    // } else {

                    updateLocationPost(location_post)
                        .then(() => history.push("/location_posts"))
                }}
                className="btn btn-primary">Edit</button>
        </form>
    )


}


