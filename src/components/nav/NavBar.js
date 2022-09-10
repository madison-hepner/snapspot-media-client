import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
        <div className="navbar__background" >
            <picture className="navbar__img" >
            <img className="nav__logo" src={'/SnapSpot.png'} alt="SnapSpot Logo" /> 
            </picture> 
        </div>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/photos"> For Photos</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/roads"> For Roads</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/events">Events</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/profile"> Profile</Link>
            </li>
        </ul>
    )
}