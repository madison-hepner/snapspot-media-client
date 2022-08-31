import React from "react"
import { Route, Routes, Switch } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./components/locations/LocationCard"


export const ApplicationViews = () => {
    return (
        <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/photos" element={<LocationCard />} />

        </Switch>
        </>
    )
}