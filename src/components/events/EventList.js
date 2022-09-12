import React, { useEffect, useState} from "react"
import { getAllEventPosts, getLocationTypes, getLocations, deleteEventPost } from "./EventManager.js"
import "./EventList.css"
import { useHistory, useParams } from 'react-router-dom'

export const EventList = (props) => {
    const [ event_posts, setEventPosts ] = useState([])
    const [location_types, setLocation_Types] = useState([])
    const [locations, setLocation] = useState([])
    const history = useHistory()

    useEffect(() => {
        getAllEventPosts().then(data => setEventPosts(data))
    }, [])
    
    useEffect(() => {
        getLocationTypes()
            .then(setLocation_Types)
    }, [])

    useEffect(() => {
        getLocations()
            .then(setLocation)
    }, [])

    const handleDeleteEventPost = (id) => {
        deleteEventPost(id)
        .then(() => getAllEventPosts().then(setEventPosts));
    };

    return (
        <article className="event_posts_list">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/event_posts/new" })
                }}
            >Make New Post</button>

            {
                event_posts.map(event_post => {
                    return <section key={`event--${event_post.id}`} className="event">
                        <div className="event__title">{event_post.event_name}</div>
                        <div className="event__description">{event_post.description}</div>
                        <picture>
                            <img className="media__img" src={event_post.locationImg} alt="media image" />
                        </picture>
                        <div className="location__type">{event_post.location_type}</div>
                        <div className="location">{event_post.locationId}</div>
                        <div className="event">{event_post.date}</div>

                        <div className="media__delete">
                            <div className="media__delete__btns">
                                <button type="button" className="media__delete__btns__btn" id="media__delete__btn" onClick={() => handleDeleteEventPost(event_post.id)} ><small>delete post</small></button>
                            </div>
                        </div>
                        
                    </section>
                })
            }
        </article>
    )
}