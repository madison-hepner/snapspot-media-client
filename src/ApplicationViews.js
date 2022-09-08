import React from "react"
import { Route, Switch, useHistory } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./components/locations/LocationCard"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"




export const ApplicationViews = () => {

    return (
        <>
            <Router>
            <Route path="/" element={
                    <Home />
            } />

                {/* <Route path="/photos" element={<div>{LocationCard}</div>} /> */}

                {/* Render the animal list when http://localhost:3000/animals */}


            </Router>
        </>
    )
}