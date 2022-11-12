import React from "react"

export default function Card (props){
    return (
        <div className="card">
                <div className="main--image">
                    <img className="main-img" src={`${props.imageUrl}`} alt="" />
                </div>
                <div className="info">
                    <div className="location">
                        <img className="small-icon" src="https://raw.githubusercontent.com/minhvy828/React-Travel/b1e3e002ec5f5f92f91c2fceec2c075e72e175a4/src/assets/location.svg" alt="" />
                        <h6>{props.location}</h6>
                        <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                    </div>
                        <h2 className="title">{props.title}</h2>
                        <h6 className="date">{props.startDate} - {props.endDate}</h6>
                        <p className="description">{props.description}</p>
                </div>
        </div>
    )
}