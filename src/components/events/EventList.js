import React, { useEffect, useState} from "react"
import { getAllEventPosts, getLocationTypes, getLocations, deleteEventPost } from "./EventManager.js"
import "./EventList.css"
import { useHistory, useParams } from 'react-router-dom'

export const EventList = (props) => {
    const [ event_posts, setEventPosts ] = useState([])
    const [location_types, setLocation_Types] = useState([])
    const [locations, setLocation] = useState([])
    const history = useHistory()

    //not sure

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

    const handleEditButton = e => {
        const eventPostId = parseInt(e.target.id.split("--")[1])
        history.push(`/event_posts/${eventPostId}/edit`)
    }

    return (
        <>
        <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/event_posts/new" })
                }}
            >Make New Post</button>
        <article className="event_posts_list">

            {
                event_posts.map(event_post => {
                    return <section key={`event--${event_post.id}`} className="event_card">
                        <div className="img__box">
                        <div className="event__title">{event_post.event_name}</div>
                        <div className="event__description">{event_post.description}</div>
                        <div className="location__type">{event_post.location_type.location_type}</div>
                        <div className="location">{event_post.locationId.locationName}</div>
                        <div className="event">{event_post.date}</div>

                        <div className="media__delete">
                            <div className="media__delete__btns">
                                <button type="button" className="media__delete__btns__btn" id="media__delete__btn" onClick={() => handleDeleteEventPost(event_post.id)} ><small>delete post</small></button>
                            </div>
                        </div>

                        <button classname="event_editButton" id={"edit--" + event_post.id} onClick={handleEditButton}>Edit Post</button>
                        </div>
                        
                    </section>
                })
            }
        </article>
        </>
    )
}