import React from "react"
import FoodCategoryCarousel from "./Components/FoodCategoryCarousel"
import AdvertisementCarousel from "./Components/AdvertisementCarousel"
import StickyDiv from "./Components/StickyDiv"

export default function Body() {
 
    return(
<div className="Body">
        <FoodCategoryCarousel />
        <AdvertisementCarousel />
        <StickyDiv />
</div>
)}