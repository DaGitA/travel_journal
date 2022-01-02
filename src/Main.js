import React from "react"
import Card from "./Card.js"
import data from "./Data.js"

export default function Main(){
    const cards = data.map(item => {
        return(
            <Card
                key = {item.googleMapsUrl}
                info = {item}
                />
        )
    })
    return(
        <div className="main">
            {cards}
        </div>
    )
}