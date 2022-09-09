export const getAllLocations = () => {
    return fetch("http://localhost:8000/location_posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}


export const getArticleById = (articleId) => {
    return fetch(`${remoteURL}/articles/${articleId}`)
        .then(response => response.json())
}