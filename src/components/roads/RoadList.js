import React, { useEffect, useState} from "react"
import { getAllRoadPosts, getRoadTypes, getLocations, deleteRoadPost } from "./RoadManager.js"
import "./RoadList.css"
import { useHistory, useParams } from 'react-router-dom'

export const RoadList = (props) => {
    const [ road_posts, setRoadPosts ] = useState([])
    const [road_types, setRoad_Types] = useState([])
    const [locations, setLocation] = useState([])
    const history = useHistory()

    useEffect(() => {
        getAllRoadPosts().then(data => setRoadPosts(data))
    }, [])
    
    useEffect(() => {
        getRoadTypes()
            .then(setRoad_Types)
    }, [])

    useEffect(() => {
        getLocations()
            .then(setLocation)
    }, [])

    const handleDeleteRoadPost = (id) => {
        deleteRoadPost(id)
        .then(() => getAllRoadPosts().then(setRoadPosts));
    };

    const handleEditButton = e => {
        const roadPostId = parseInt(e.target.id.split("--")[1])
        history.push(`/road_posts/${roadPostId}/edit`)
    }

    return (
        <article className="road_posts_list">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/road_posts/new" })
                }}
            >Make New Post</button>

            {
                road_posts.map(road_post => {
                    return <section key={`road--${road_post.id}`} className="road">
                        <div className="road__title">{road_post.road_name}</div>
                        <div className="road__description">{road_post.description}</div>
                        <picture>
                            <img className="media__img" src={road_post.locationImg} alt="media image" />
                        </picture>
                        <div className="location__type">{road_post.road_type.road_type}</div>
                        <div className="location">{road_post.locationId.id}</div>

                        <div className="media__delete">
                            <div className="media__delete__btns">
                                <button type="button" className="media__delete__btns__btn" id="media__delete__btn" onClick={() => handleDeleteRoadPost(road_post.id)} ><small>delete post</small></button>
                            </div>
                        </div>

                        <button classname="road_editButton" id={"edit--" + road_post.id} onClick={handleEditButton}>Edit Post</button>
                        
                    </section>
                })
            }
        </article>
    )
}