export const getAllRoadPosts = () => {
    return fetch("http://localhost:8000/road_posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}


export const getRoadPostById = (roadPostId) => {
    return fetch(`http://localhost:8000/road_posts/${roadPostId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getRoadTypes = () => {
    return fetch("http://localhost:8000/road_types", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getLocations = (locationId) => {
    return fetch(`http://localhost:8000/locations`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteRoadPost = (id) => {
    return fetch(`http://localhost:8000/road_posts/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
    })
        .then(response => response.json())
}