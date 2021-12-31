import React from "react";
import travelImage from "./cantons.jpg";

export default function Card(){
    return(
        <div className="card">
            <div>
                <img className="card__image"  src={travelImage} alt="travel image"/>
            </div>
            <div className="card__info">
                <p>icon placeholder</p>
                <p>Country</p>
                <a>View on Google Maps</a>
                <h2>Un voyage</h2>
                <p>Date</p>
                <p>Description</p>
            </div>
        </div>
    )
}