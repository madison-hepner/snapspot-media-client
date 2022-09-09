

import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./components/locations/LocationCard"

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
                <LocationCard />
            </Route>


        </main>
    </>
}