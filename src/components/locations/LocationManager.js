export const getAllLocations = () => {
    return fetch("http://localhost:8000/location_posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}


export const getLocationPostById = (locationPostId) => {
    return fetch(`http://localhost:8000/location_posts/${locationPostId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}


export const deleteLocationPost = (id) => {
    return fetch(`http://localhost:8000/location_posts/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}