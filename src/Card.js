import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <div>
                <img className="card__image"  src={props.info.imageUrl} alt="travel image"/>
            </div>
            <div className="card__info">
                <i className="card__info__icon fas fa-map-marker-alt"/>
                <span>   {props.info.location}</span>
                <a href={props.info.googleMapsUrl}>View on Google Maps</a>
                <h2>{props.info.title}</h2>
                <p>{props.info.startDate} - {props.info.endDate}</p>
                <p>{props.info.description}</p>
            </div>
        </div>
    )
}