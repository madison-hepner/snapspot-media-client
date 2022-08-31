import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { SnapSpot } from "./components/SnapSpot"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SnapSpot />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)