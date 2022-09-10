import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createLocationPost, getLocationTypes} from "./LocationManager"


export const LocationPostForm = () => {
    const history = useHistory()
    const [location_types, setLocation_Types] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentLocationPost, setCurrentLocationPost] = useState({
        title: "",
        description: "",
        locationImg: "",
        locationId: 42,
        location_type: 2,
        driver: 1,

    })

    useEffect(() => {
        getLocationTypes()
            .then(setLocation_Types)
    }, [])

    const changeLocationPostState = (domEvent) => {
        const newLocationPostState = { ...currentLocationPost }
        newLocationPostState[domEvent.target.name] = domEvent.target.value
        setCurrentLocationPost(changeLocationPostState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Make New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentLocationPost.title}
                        onChange={changeLocationPostState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentLocationPost.description}
                        onChange={changeLocationPostState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="locationImg">Location Image </label>
                    <input type="url" name="locationImg" required autoFocus className="form-control"
                        value={currentLocationPost.locationImg}
                        onChange={changeLocationPostState}
                    />
                </div>
                {/* change to be locationId selection from dropdown  */}
                <div className="form-group">
                    <label htmlFor="locationId">Location State: </label>
                    <input type="num" name="locationId" required autoFocus className="form-control"
                        value={currentLocationPost.locationId}
                        onChange={changeLocationPostState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="locationTypeId">Location Type:</label>
                    <select name="location_type" required className="form-control"
                        value={currentLocationPost.location_type}
                        onChange={changeLocationPostState}>
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
                    createLocationPost(location_post)
                        .then(() => history.push("/location_posts"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}