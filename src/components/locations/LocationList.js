import React, { useEffect, useState } from "react"
import { getAllLocations, getLocationTypes } from "./LocationManager.js"
import { deleteLocationPost } from "./LocationManager.js"
import "./LocationList.css"
import { useHistory, useParams } from 'react-router-dom'

export const LocationList = (props) => {
    const [ location_posts, setLocations ] = useState([])
    const [location_types, setLocation_Types] = useState([])
    const history = useHistory()

    useEffect(() => {
        getAllLocations().then(data => setLocations(data))
    }, [])
    
    useEffect(() => {
        getLocationTypes()
            .then(setLocation_Types)
    }, [])

    const handleDeleteLocationPost = (id) => {
        deleteLocationPost(id)
        .then(() => getAllLocations().then(setLocations));
    };

    return (
        <article className="location_posts_list">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/location_posts/new" })
                }}
            >Make New Post</button>

            {
                location_posts.map(location_post => {
                    return <section key={`location--${location_post.id}`} className="location">
                        <div className="location__title">{location_post.title}</div>
                        <div className="location__description">{location_post.description}</div>
                        <picture>
                            <img className="media__img" src={location_post.locationImg} alt="media image" />
                        </picture>
                        <div className="location__type">{location_post.location_type}</div>
                        <div className="location">{location_post.locationId}</div>

                        <div className="media__delete">
                            <div className="media__delete__btns">
                                <button type="button" className="media__delete__btns__btn" id="media__delete__btn" onClick={() => handleDeleteLocationPost(location_post.id)} ><small>delete post</small></button>
                            </div>
                        </div>
                        
                    </section>
                })
            }
        </article>
    )
}