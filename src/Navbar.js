import React from "react"
import earthLogo from "./earth.png"

export default function Navbar(){
    return(
        <header className="navbar">
            <img src={earthLogo} width="100px"/>
            <h1>Mes voyages</h1>
        </header>
    )
}