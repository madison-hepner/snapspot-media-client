
import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./components/locations/LocationCard"
import { LocationList } from "./components/locations/LocationList"
import { LocationPostForm } from "./components/locations/LocationForm"

export const ApplicationViews = () => {
    
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgrey"
        }}>

        <Route exact path="/">
            <Home />
        </Route>


        <Route exact path="/photos">
            <LocationList />
        </Route>

        <Route exact path="/location_posts/new">
            <LocationPostForm />
        </Route>


        </main>
    </>
}