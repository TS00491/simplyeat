import React, { useState, useEffect } from 'react';
import { retrieveCategories } from '../Api/retrieveCategories';

export default function FoodCategoryCarousel() {
const [foodItemsCategory, setFoodItemsCategory] = useState([]);
    async function getAllCategories(){
        const data = await retrieveCategories();
        setFoodItemsCategory(data);
    }

    useEffect(() => {
        getAllCategories();
      }, []);

    //   function indexTimeTwo() {
    //     for(let i = 0; i <10; i++)
    //     return i;
    //   }


let uniqueId = Math.floor(Math.random() * 1000000000);

function getUniqueId() {
  return uniqueId++;
}

function renderProducts(){
     return foodItemsCategory.map((foodDetails, index) => {

        return (
        
        <div key={getUniqueId()} className="foodCategoryOne">
      

<img className="foodCategoryPictureLinks" key ={foodDetails.id} src={foodDetails.foodPictureLink} />
<p className="foodCategoryCuisine" key = {index}>{foodDetails.cuisine} </p>
        </div>
        
        )
    });
    
  
}

    return( <div className="foodCategoryZero">
{renderProducts()}
    
         </div>)

}