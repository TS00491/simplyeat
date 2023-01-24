import React from "react";

export default function AdvertisementCarousel(){
    return(
        <div className="advertisementCarouselOne">

        <div className="advertisementCarouselText">
            {/* advertisement Carousel Text Two puts all the text and buttons into one div and thne separates the picture into another div for CSS reasons. */}
            <div className="advertisementCarouselTextTwo">
            <h1 className="hundredsOfGroceries">Hundreds of groceries matched to in-store prices</h1> 
            <p className="descriptionTextAdvertisementCarousel">Delivered in minutes
            <button className="orderNowAdvertisementCarousel">Order Now →</button>
            </p>
            </div>
            <img className="bananaPicture" src="https://d1g1f25tn8m2e6.cloudfront.net/d8d9499b-8c38-4ac1-a7e5-bbefd5ff601f.jpg" alt="banana" />
        </div>

{/* The second div for the carousel */}
        <div className="advertisementCarouselTextItemTwo">
            {/* advertisement Carousel Text Two puts all the text and buttons into one div and thne separates the picture into another div for CSS reasons. */}
            <div className="advertisementCarouselTextTwo">
            <h1 className="spend25save5">Spend £25 Save £5 on these selected restaurants</h1> 
            {/* <p className="descriptionTextAdvertisementCarousel">New Menu, who dis? */}
            <button className="orderNowAdvertisementCarousel">Tap for offers →</button>
            {/* </p> */}
            </div>
            <img className="spend25save5picture" src="https://d1g1f25tn8m2e6.cloudfront.net/c21e5a3a-5ae6-481c-b3a7-5038f4841c04.jpg" alt="spend25save5 feast" />
        </div>

        {/* Third one */}
        <div className="advertisementCarouselText">
            {/* advertisement Carousel Text Two puts all the text and buttons into one div and thne separates the picture into another div for CSS reasons. */}
            <div className="advertisementCarouselTextTwo">
            <h1 className="hundredsOfGroceries">Buy one get one free at Coco di Mama</h1> 
            <p className="descriptionTextAdvertisementCarousel">New Menu, who dis?
            <button className="orderNowAdvertisementCarousel">Order Now →</button>
            </p>
            </div>
            <img className="bananaPicture" src="https://d1g1f25tn8m2e6.cloudfront.net/d8d9499b-8c38-4ac1-a7e5-bbefd5ff601f.jpg" alt="banana" />
        </div>
        {/* <div className="advertisementCarouselDiv">
            <h3 className="advertisementCarouselDivHeading">Groceries  , alcohol, home & more. Free delivery over £20 </h3>
            <p className="advertisementCarouselDivDescription"> Gopuff has arrived</p>

        </div> */}
        </div>
    )
}