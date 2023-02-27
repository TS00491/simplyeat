import axios from 'axios';
export async function retrieveRestaurantRating() {

    try {
        const res = await axios.get("http://localhost:5001/newrestaurant/popular")
        // console.log(res.data)
        return res.data;
    } catch (error) {
        
    }
}