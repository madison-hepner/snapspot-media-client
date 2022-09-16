import React, { useEffect, useState} from "react"
import { getAllLocations, getLocationTypes, getLocations } from "./LocationManager.js"
import { deleteLocationPost } from "./LocationManager.js"
import "./LocationList.css"
import { useHistory, useParams } from 'react-router-dom'
import { SearchBar } from "../search/SearchBar.js"

export const LocationList = (props) => {
    const [ location_posts, setLocations ] = useState([])
    const [location_types, setLocation_Types] = useState([])
    const [locations, setLocation] = useState([])
    const [filteredLocationPosts, setFilteredLocationPosts] = useState([])
    const history = useHistory()
    const {locationId} = useParams();
    const [searchInput, setSearchInput] = useState("");
    const [ searchCategories, setSearchCategories] = useState("")
    const userId = parseInt(localStorage.getItem("userId"))



    // useEffect(() => {
    //     getAllLocations().then(data => setLocations(data))
    // }, [])
    
    useEffect(() => {
        getLocationTypes()
            .then(setLocation_Types)
    }, [])

    useEffect(() => {
        getLocations()
            .then(setLocation)
    }, [])

    useEffect(() => {
        getAllLocations().then((data) => {
            setLocations(data)
            // setLocation_Types(data)
            setFilteredLocationPosts(data)
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
            const x = location_posts.filter((location_post) => {
                console.log(searchInput)
                if (location_post.locationId.id === locationNameObj.id) {
                    return true
                }
                return false
    
    
        });
            setFilteredLocationPosts(x)
        }

  

}

    const handleCategoryChange = (e) => {

        const locationTypeObj = location_types.find((l_t) => {
            if (l_t.id === parseInt(e.target.value)) {
                return true
            }
            return false
        })

        
            const x = location_posts.filter((location_post) => {
                
                if (location_post.location_type.id === locationTypeObj.id) {
                    return true
                }
                return false
    
    
        });
            setFilteredLocationPosts(x)

}


    

    // useEffect(() => {
    //     getAllLocations(setLocations);
    //   }, []);


    const handleDeleteLocationPost = (id) => {
        deleteLocationPost(id)
        .then(() => getAllLocations().then(setLocations));
    };

    const handleEditButton = e => {
        const locationPostId = parseInt(e.target.id.split("--")[1])
        history.push(`/location_posts/${locationPostId}/edit`)
    }


    return (
        <>
        <article className="location_posts_list">
            {/* <SearchBar /> */}
            <fieldset className="search__section">
            <div className="search__bar">
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
        <h4 className="divider">OR</h4>
        <div className="filter">
        <label htmlFor="locationTypeId" className="hamburger">≡</label>
                <select name="location_types_filter" required className="form-control"
                        // value={currentLocationPost.location_type}
                        onChange={handleCategoryChange}>
                        <option value="0">Search by Location Type</option>
                        {
                            location_types.map(location_type => <option key={location_type.id} value={location_type.id}>
                                {location_type.location_type}
                            </option>)
                        }

                </select>
            </div>
            </fieldset>

                <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/location_posts/new" })
                }}
            >Make New Post</button>

            {
                filteredLocationPosts.map(location_post => {
                    return <section key={`location--${location_post.id}`} className="location_card">
                        <fieldset className="card__grow">
                        <div className="border__grow"></div>
                        <div className="img__box">
                        <div className="img__container">
                        <picture className="img__box">
                            <img className="media__img" src={location_post.locationImg} alt="media image" />
                        </picture>
                        </div>
                        <div className="location__title">{location_post.title}</div>
                        <div className="location__description">{location_post.description}</div>
                        <div className="location__type">{location_post?.location_type.location_type}</div>
                        <div className="location">{location_post.locationId.locationName}</div>

                        <div className="media__delete">
                            <div className="media__delete__btns">
                                <button type="button" className="media__delete__btns__btn" id="media__delete__btn" onClick={() => handleDeleteLocationPost(location_post.id)} ><small>delete post</small></button>
                            </div>
                        </div>

                        <button classname="location_editButton" id={"edit--" + location_post.id} onClick={handleEditButton}>Edit Post</button>
                        </div>
                        </fieldset>
                        <div className="border__grow__bottom"></div>
                    </section>

                
                })
            }
        </article>
        </>
    )

        
}