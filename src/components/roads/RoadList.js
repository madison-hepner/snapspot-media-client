import React, { useEffect, useState} from "react"
import { getAllRoadPosts, getRoadTypes, getLocations, deleteRoadPost } from "./RoadManager.js"
import "./RoadList.css"
import { useHistory, useParams } from 'react-router-dom'

export const RoadList = (props) => {
    const [ road_posts, setRoadPosts ] = useState([])
    const [road_types, setRoad_Types] = useState([])
    const [locations, setLocation] = useState([])
    const [filteredRoadPosts, setFilteredRoadPosts] = useState([])
    const [searchInput, setSearchInput] = useState("");
    const [ searchCategories, setSearchCategories] = useState("")

    const history = useHistory()
    
    useEffect(() => {
        getRoadTypes()
            .then(setRoad_Types)
    }, [])

    useEffect(() => {
        getLocations()
            .then(setLocation)
    }, [])

    useEffect(() => {
        getAllRoadPosts().then((data) => {
            setRoadPosts(data)
            // setLocation_Types(data)
            setFilteredRoadPosts(data)
        })
    }, [])

    const handleInput = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }


    const handleChange = (e) => {

        const locationNameObj = locations.find((l) => {
            if (l.locationName === searchInput) {
                return true
            }
            return false
        })

        if (searchInput.length > 0) {
            const x = road_posts.filter((road_post) => {
                console.log(searchInput)
                if (road_post.locationId.id === locationNameObj.id) {
                    return true
                }
                return false
    
    
        });
            setFilteredRoadPosts(x)
        }

  

}

const handleCategoryChange = (e) => {

    const roadTypeObj = road_types.find((r_t) => {
        if (r_t.id === parseInt(e.target.value)) {
            return true
        }
        return false
    })

    
        const x = road_posts.filter((road_post) => {
            
            if (road_post.road_type.id === roadTypeObj.id) {
                return true
            }
            return false


    });
        setFilteredRoadPosts(x)

}





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
            <fieldset className="search__road__section">
            <div className="search__road__bar">
            <input
                    type="text"
                    id="search"
                    placeholder="Search By State"
                    autoComplete="off"
                    onChange={handleInput}>
                    </input>

                <button 
                        type="button"
                        onClick={() => {handleChange()}}>
                                Search
                    </button>
                </div>
        <h4 className="road__divider">OR</h4>
        <div className="road__filter">
        <label htmlFor="roadTypeId" className="road__hamburger">≡</label>
                <select name="road_types_filter" required className="road__form-control"
                        // value={currentLocationPost.location_type}
                        onChange={handleCategoryChange}>
                        <option value="0">Search by Road Type:</option>
                        {
                            road_types.map(road_type => <option key={road_type.id} value={road_type.id}>
                                {road_type.road_type}
                            </option>)
                        }

                </select>
            </div>
            </fieldset>

                <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/road_posts/new" })
                }}
            >Make New Post</button>
            {
                filteredRoadPosts.map(road_post => {
                    return <section key={`road--${road_post.id}`} className="road_card">
                        <fieldset className="road_card__grow">
                        <div className="img__road__box">
                        <div className="img__road__container">
                        <picture className="img__road__box">
                            <img className="media__road__img" src={road_post.locationImg} alt="media image" />
                        </picture>
                        </div>
                        <div className="road__title">{road_post.road_name}</div>
                        <div className="road__description">{road_post.description}</div>
                        <div className="road__location__type">{road_post.road_type.road_type}</div>
                        <div className="road__location">{road_post.locationId.locationName}</div>

                        <div className="road__media__delete">
                            <div className="road__media__delete__btns">
                                <button type="button" className="media__delete__btns__btn" id="media__delete__btn" onClick={() => handleDeleteRoadPost(road_post.id)} ><small>delete post</small></button>
                            </div>
                        </div>

                        <button classname="road_editButton" id={"edit--" + road_post.id} onClick={handleEditButton}>Edit Post</button>
                        </div>
                        </fieldset>
                        
                    </section>
                })
            }
        </article>
    )
}