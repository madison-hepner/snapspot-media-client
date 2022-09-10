import React, { useEffect, useState } from "react"
import { getAllLocations } from "./LocationManager.js"
import { deleteLocationPost } from "./LocationManager.js"
import "./LocationList.css"

export const LocationList = (props) => {
    const [ location_posts, setLocations ] = useState([])

    useEffect(() => {
        getAllLocations().then(data => setLocations(data))
    }, [])

    const handleDeleteLocationPost = (id) => {
        deleteLocationPost(id)
        .then(() => getAllLocations().then(setLocations));
    };

    return (
        <article className="location_posts_list">
            {
                location_posts.map(location_post => {
                    return <section key={`location--${location_post.id}`} className="location">
                        <div className="location__title">{location_post.title}</div>
                        <div className="location__description">{location_post.description}</div>
                        <picture>
                            <img className="media__img" src={location_post.locationImg} alt="media image" />
                        </picture>
                        <div className="location__type">{location_post?.location_type}</div>

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