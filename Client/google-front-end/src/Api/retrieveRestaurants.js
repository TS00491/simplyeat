import axios from 'axios';
export async function retrieveRestaurants() {

    try {
        const res = await axios.get("http://localhost:5001/newrestaurant/")
        // console.log(res.data)
        return res.data;
    } catch (error) {
        
    }
}