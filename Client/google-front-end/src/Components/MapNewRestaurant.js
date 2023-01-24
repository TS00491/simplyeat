import React, { useState, useEffect } from 'react';
import { retrieveRestaurants } from '../Api/retrieveRestaurants';


export default function MapNewRestaurant() {
const [recommendQuickRestaurantsList, setRecommendQuickRestaurantsList] = useState([]);
    async function getAllQuickRestaurants(){
        const data = await retrieveRestaurants();
        setRecommendQuickRestaurantsList(data);
    }

    useEffect(() => {
        getAllQuickRestaurants();
      }, []);

      

    // function renderProducts(){
    //     return 
    // }

    return( <div className="restaurantCategoryZero">
{recommendQuickRestaurantsList.map((restaurantDetails, index) => {
            return (
                <div key={index} className="restaurantMappingForInARushCategory">
    
                        <img src={restaurantDetails.thumbnail}/>
        
                    <div className="restaurantNameAndCuisine">
                        <div className='flex flex-row justify-between items-center py-1'><p className="restaurantName" key = {index}>{restaurantDetails.restaurantName} -  {restaurantDetails.address}</p>
                        <div className='flex w-8 h-8 text-xs justify-center items-center rounded-full bg-slate-200'>{restaurantDetails.restaurantRating}</div></div>
                        
                    </div>
                 </div>
            )
        })}
    
         </div>)

}