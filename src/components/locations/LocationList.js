import React, { useEffect, useState } from "react"
import { getAllLocations } from "./LocationManager.js"

export const LocationList = (props) => {
    const [ location_posts, setLocations ] = useState([])

    useEffect(() => {
        getAllLocations().then(data => setLocations(data))
    }, [])

    return (
        <article className="location_posts_list">
            {
                location_posts.map(location_post => {
                    return <section key={`location--${location_post.id}`} className="location">
                        <div className="location__title">{location_post.title}</div>
                        <div className="location__description">{location_post.description} loc descr here</div>
                        <div className="location__img">{location_post.img}</div>
                        <div className="location__img">{location_post.location_type}</div>
                    </section>
                })
            }
        </article>
    )
}