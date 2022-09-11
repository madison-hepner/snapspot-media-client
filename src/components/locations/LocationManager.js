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

export const createLocationPost = location_post => {
    return fetch("http://localhost:8000/location_posts", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(location_post)
    })
        .then(res => res.json())
}

const updateLocationPost = (id, location_post) => {
    return fetch(`http://localhost:8000/location_posts/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(location_post)
    })
}



// export const createLocationPost = (location_post) => {
//     return fetch("http://localhost:8000/location_posts", {
//         method: "POST",
//         headers:{
//             "Authorization": `Token ${localStorage.getItem("lu_token")}`
//         },
//         body: JSON.stringify(location_post)
//     })
//         .then(res => res.json())
// }

export const getLocationTypes = () => {
    return fetch("http://localhost:8000/location_types", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getLocations = () => {
    return fetch("http://localhost:8000/locations", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}


export const deleteLocationPost = (id) => {
    return fetch(`http://localhost:8000/location_posts/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
    })
        .then(response => response.json())
}