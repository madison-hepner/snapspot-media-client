
import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./components/locations/LocationList"
import { LocationPostForm } from "./components/locations/LocationForm"
import { RoadList } from "./components/roads/RoadList"
import { RoadPostForm } from "./components/roads/RoadForm"
import { EventList } from "./components/events/EventList"

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

        <Route exact path="/roads">
            <RoadList />
        </Route>

        <Route exact path="/events">
            <EventList />
        </Route>

        <Route exact path="/location_posts/new">
            <LocationPostForm />
        </Route>

        <Route exact path="/road_posts/new">
            <RoadPostForm />
        </Route>


        </main>
    </>
}