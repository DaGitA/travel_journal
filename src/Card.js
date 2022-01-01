import React from "react";
import travelImage from "./cantons.jpg";

export default function Card(){
    return(
        <div className="card">
            <div>
                <img className="card__image"  src={travelImage} alt="travel image"/>
            </div>
            <div className="card__info">
                <i className="card__info__icon fas fa-map-marker-alt"></i>
                <span>   CANADA</span>
                <a href="https://maps.google.ca/">View on Google Maps</a>
                <h1>Un voyage</h1>
                <p><b>12 janvier - 18 janvier 2021</b></p>
                <p>The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings
                </p>
            </div>
        </div>
    )
}