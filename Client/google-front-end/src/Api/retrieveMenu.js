import axios from "axios";
// export async function retrieveMenu() {

//     try {
//         const res = await axios.get("http://localhost:5001/newrestaurant/:id")
//         // console.log(res.data)
//         return res.data;
//     } catch (error) {

//     }
// }

export async function retrieveMenu(restaurantId) {
	return axios
		.get(`http://localhost:5001/newrestaurant/get/${restaurantId}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw err;
		});
}
