import React from "react";
import MapNewRestaurant from "./MapNewRestaurant";

export default function StickyDiv() {
    return(
        <div className="restaurantsAndFilterDiv">
        <div className="StickyDiv">
            <h1 className="allStoresHeaderRFDiv">All stores</h1>
         
        </div>
        <div className="StickyDivAdjacent">
            <div className="inARush">
            <h1 className="inARushHeading"> In a rush?</h1>
            <p className="inARushSubheading">Here's the fastest delivery for you</p>
            <MapNewRestaurant />
            </div>

        </div>
        </div>
    )
}