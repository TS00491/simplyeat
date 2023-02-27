import axios from "axios";
export async function retrieveRestaurantsWithDeals() {
	try {
		const res = await axios.get("http://localhost:5001/newrestaurant/deals");
		// console.log(res.data)
		return res.data;
	} catch (error) {}
}
