import axios from 'axios';
export async function retrieveValueB() {

    try {
        const res = await axios.get("http://localhost:5001/newrestaurant/valueb")
        // console.log(res.data)
        return res.data;
    } catch (error) {
        
    }
}